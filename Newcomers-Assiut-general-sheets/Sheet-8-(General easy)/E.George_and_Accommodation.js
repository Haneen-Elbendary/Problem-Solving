"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  //************************** First version ****************
  //   let n = parseInt(readline());
  //   let counter = 0;
  //   let lines = [];
  //   while (n--) {
  //     lines.push(readline());
  //   }
  //   for (let i of lines) {
  //     let [a, b] = i.split(" ").map(Number);
  //     if (a <= b - 2) counter++;
  //   }
  //   print(counter);
  //************************** Optimized version ****************
  let n = parseInt(readline());
  let counter = 0;
  while (n--) {
    let [a, b] = readline().split(" ").map(Number);
    if (b - a >= 2) counter++;
  }
  print(counter);
}
