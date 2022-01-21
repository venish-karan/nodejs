// NPM module

// const color = require("cli-color"); // cli-color is dirname

// console.log(color.red("Hello Node js"));

// wrapped in background
// (function (exports, require, module, __dirname, __filename) {
//   var age = 25;
//   console.log(age);
// })();

// local module -> our own module

// const auth = require("./auth.js");
// console.log(auth.register("Venish"));
// console.log(auth.login("venish", "secret"));

// Core modules (path module)

const path = require("path");

// dirname

// console.log("Folder Name:", path.dirname(__filename));

// filename

// console.log(path.basename(__filename));

// Extension name

console.log("Ext name:", path.extname(__filename));

// parse

console.log("Parse: ", path.parse(__filename));

// Join

console.log("Join:", path.join(__dirname, "order", "app.js")); // __dirname => current folder , order => is a folder hat we want to join, app.js => file name
// output => Join: C:\Users\venis\Desktop\nodejs\order\app.js

//File system

const fs = require("fs");

// Make a directory

// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     console.log(error);
//     console.log("Something went wrong...");
//     return;
//   }
//   console.log("Folder created");
// });

// Create a file

// fs.writeFile(
//   path.join(__dirname, "test", "test.txt"),
//   "Hello Node",
//   (error) => {
//     if (error) {
//       throw error;
//     }
//     fs.appendFile(
//       path.join(__dirname, "test", "test.txt"),
//       "Added something",
//       (error) => {
//         if (error) {
//           throw error;
//         }
//         console.log("file append done");
//       }
//     );
//     console.log("File created");
//   }
// );

// Read a file

// fs.readFile(
//   path.join(__dirname, "test", "test.txt"),
//   "utf-8",
//   (error, data) => {
//     if (error) {
//       throw error;
//     }
//     //   const content = Buffer.from(data);

//     //   console.log(content.toString());

//     console.log(data);
//   }
// );

// Operating System module (os module)

const os = require("os");

// console.log("Os type: ", os.type());

// console.log("Os platform: ", os.platform());

// console.log("cpu architecture: ", os.arch());

// console.log("cpu details: ", os.cpus());

// console.log("Free memory: ", os.freemem()); os.totalmem();

// console.log("laptop restarted:", os.uptime());

// Events modules

const Emitter = require("events");

// const myEmitter = new Emitter();

// listener is myEmitter
// myEmitter.on("somename", (data) => {
//   console.log(data);
// });

// myEmitter.emit("somename", {
//   name: "venish",
// });

// class Auth extends Emitter {
//   register(username) {
//     console.log("Registered successfully...");
//     this.emit("registered", username);
//   }
// }

// const auth = new Auth();
// //Listen
// // Verify email
// auth.on("registered", (data) => {
//   console.log(`Sending Email to ${data}`);
// });

// // welcome email
// auth.on("registered", (data) => {
//   console.log(`Sending welcome Email to ${data}`);
// });

// auth.register("venish");
