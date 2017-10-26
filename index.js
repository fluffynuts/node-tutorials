var
  path = require("path"),
  fs = require("fs"),
  fork = require("child_process").fork;

function makeEnvironment() {
  return require('workshopper-adventure')({
    appDir: __dirname
    , languages: ['en', 'ja', 'ko', 'es', 'zh-cn', 'zh-tw', 'pt-br', 'nb-no', 'uk', 'it', 'ru', 'fr']
    , header: require('workshopper-adventure/default/header')
    , footer: require('./lib/footer.js')
  });
}

var moduleLoaders = {
  "stream-adventure": () => {
    require("stream-adventure/bin/cmd");
  },
  default: (moduleName) => {
    var mod = require(moduleName);
    mod.execute([]);
  }
}

function tryRunModule(moduleName) {
  var loader = moduleLoaders[moduleName] || moduleLoaders.default;
  try {
    loader(moduleName);
  } catch (e) {
    throw new Error(`Don't know how to load ${moduleName}\n\nError was: ${e}`);
  }
}

var
  tutorials = makeEnvironment(),
  packageConfig = require("./package.json"),
  entries = Object.keys(packageConfig.dependencies).map(s => s.toUpperCase());

tutorials.addAll(entries.map(function (item) {
  return {
    name: item,
    fn: function () {
      var moduleName = item.toLowerCase().replace(/\s/g, "");

      tryRunModule(moduleName);

      return {
        getExerciseText: function () {
          return "";
        }
      };
    }
  }
}));

// process.on("beforeExit", () => {
//   fs.writeFileSync("final.txt", "moo", { encoding: "utf8" });
//   fork("index");
// });

tutorials.execute(process.argv.slice(2));