# node-tutorials
Smooshes a bunch of node tutorials into one place which can be downloaded and shared offline

### Rough much?
Yes, this is super-rough. I've put about an hour or two into it, finding tutorials
and hacking the shell of tuts I've found from http://nodeschool.io to present the tutorials.

It's a work-in-progress. It's a starting-point for offline learning.

### How to?

1. Copy this folder somewhere on your machine
2. Stuff to install is in the tools folder (msi files)
3. Install Node - this is required to run javascript code on your computer
4. Install Visual Studio Code - you will use this to edit code. There are other editors, but this one is pretty good.
5. Open a command prompt (click start -> run -> "cmd.exe", or press WIN+R and type "cmd.exe", without the quotes)
6. CD to where you copied this folder (for example, if you copied it to C:\node-tutorials, do:
```   
   C:\Users\yourname> cd C:\node-tutorials
```   
   If you copied somewhere other than C:, you may have to change drives: just type in the drive
   letter (eg, "D") and a colon (:) and press enter
```   
   C:\Users\yourname> D:
```
  And the prompt (the bit that used to say `C:\Users\yourname` should change to start with `D:`   
7. Once you're in the folder where you copied all this stuff, you should be able to type:
```   
   npm start
```
   and that will get you going (hopefully). You should get to simple menus. If you exit at
   any time, you can always start again with
```   
   npm start
```

8. Problems will often ask you to write some code and then verify it, like so:
```
  To verify your `program.js` against the expected output, do:

    stream-adventure verify program.js

  for more options, run `stream-adventure help`.
```
  When you see these instructions, just prepend "npm run" to the commands they recommend.

  For example, when the script says you can do:
```    
    stream-adventure verify program.js
```
  You should do:
```
    npm run stream-adventure verify program.js
```

  This allows the tutorials to be copied and run offline.

10. You can run any js files you make by doing (eg for `my-program.js`):
```
  node my-program.js
```

### Where to start?
The tutorials here are presented in alphabetical order. I'd suggest starting with "javascripting"
and then perhaps "learnyouhtml" and "learnyounode". Then whatever you please.