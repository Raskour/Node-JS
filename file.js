const fs = require("fs");
const os = require("os");

console.log(os.cpus().length); // it will give threads number in your CPU

//sync..Blocking Request
fs.writeFileSync("./test.txt", "Hello Everyone");

//Async..Non-Blocking
fs.writeFile("./test.txt", "Hello World async", (err) => {});

// const result = fs.readFileSync("./contact.txt", "utf-8");

// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(result);
//   }
// });

//fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
