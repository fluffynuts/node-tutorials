var
  path = require("path"),
  fs = require("fs");

function makeEnvironment() {
  return require('workshopper-adventure')({
    appDir: __dirname
    , languages: ['en', 'ja', 'ko', 'es', 'zh-cn', 'zh-tw', 'pt-br', 'nb-no', 'uk', 'it', 'ru', 'fr']
    , header: require('workshopper-adventure/default/header')
    , footer: require('./lib/footer.js')
  });
}

function tryLoad(moduleName) {
  try {
    var result = require(moduleName);
    if (typeof(result.execute) === "function") {
      return result;
    }
  } catch (e) {
  }
  throw new Error(`don't know how to load ${moduleName}`);
}

var 
  tutorials = makeEnvironment(),
  packageConfig = require("./package.json"),
  entries = Object.keys(packageConfig.dependencies).map(s => s.toUpperCase());

tutorials.addAll(entries.map(function (item) {
  return {
    name: item,
    fn: function () {
      var
        moduleName = item.toLowerCase().replace(/\s/g, ""),
        chosen = tryLoad(moduleName);
      chosen.execute([]);
      return {
        getExerciseText: function () {
          return "";
        }
      };
    }
  }
}));

tutorials.execute(process.argv.slice(2));