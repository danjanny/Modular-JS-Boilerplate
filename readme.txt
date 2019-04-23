ES6 Module Boilerplate - Modular Javascript

Modular javascript using webpack to transpiling ES6 to ES5 (using babel loader) therefore we can use it in older browser, then build it into bundler.js as optimized js script to embed in server

which must be considered : 
1. src : modular js file separate by folder as module and each class-based file
2. dist : bundler js file build by webpack to use in server / production environment
3. webpack.config.js : config file, i use it to turn on watch mode so i don't have to running cli to build output, and add babel loader as ES6 transpiler

How to use it :
0. install node js and local dev env (i use XAMPP for simplicity)
1. Clone this repo to your root local development environment
2. running `npm install` in the same path to install all of dependencies within package.json
3. access `http://localhost/webpack-demo/dist`, so you'll get a result in the browser 
4. make customize in file within src folder, like add class or etc, then go to cli, run : npx webpack
5. Refresh browser in the 3rd point. and voila! you get the updated content as you changed before.