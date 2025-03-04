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
  //   let counter = 1;
  //   let lines = [];
  //   while (n--) {
  //     lines.push(readline());
  //   }
  //   for (let i = 0; i < lines.length - 1; i++) {
  //     let [a, b] = lines[i].split("").map(Number);
  //     let [c, d] = lines[i + 1].split("").map(Number);
  //     if (b === c) counter++;
  //   }
  //   print(counter);
  //************************** Optimized version ****************
  let n = parseInt(readline());
  let counter = 1;
  let prv = readline();
  while (--n) {
    let curr = readline();
    if (prv[1] === curr[0]) counter++;
    // don't forget to update the value
    prv = curr;
  }
  print(counter);
}
