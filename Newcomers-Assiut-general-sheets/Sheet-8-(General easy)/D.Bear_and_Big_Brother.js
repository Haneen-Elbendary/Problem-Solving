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
  // let counter = 0;
  // let [a, b] = readline().split(" ").map(Number);
  // if (a === b) return print(1);
  // while (true) {
  //   a *= 3;
  //   b *= 2;
  //   counter++;
  //   if (a > b) return print(counter);
  // }
  //************************** Optimized version ****************
  let counter = 0;
  let [a, b] = readline().split(" ").map(Number);
  while (a <= b) {
    a *= 3;
    b *= 2;
    counter++;
  }
  print(counter);
}
