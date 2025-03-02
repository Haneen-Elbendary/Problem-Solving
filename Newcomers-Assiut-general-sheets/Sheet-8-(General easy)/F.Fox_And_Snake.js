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
  //   let [a, b] = readline().split(" ").map(Number);
  //   let right = true;
  //   let line = "";
  //   for (let i = 1; i <= a; i++) {
  //     line = "";
  //     for (let j = 1; j <= b; j++) {
  //       if (i % 2 === 1) {
  //         line += "#";
  //       }
  //       if (i % 2 === 0) {
  //         if (right && j < b) {
  //           line += ".";
  //         } else if (right && j === b) {
  //           line += "#";
  //           right = false;
  //           break; // to not get into the next if
  //         }
  //         //
  //         if (!right && j === 1) {
  //           line += "#";
  //         } else if (!right && j != 1) {
  //           line += ".";
  //           if (j === b) {
  //             right = true;
  //           }
  //         }
  //       }
  //     }
  //     print(line);
  //   }
  //************************** Optimized version ****************
  let [a, b] = readline().split(" ").map(Number);
  let right = true;
  let line = "";
  for (let i = 1; i <= a; i++) {
    if (i % 2 === 1) line = "#".repeat(b);
    if (i % 2 === 0) {
      line = right ? ".".repeat(b - 1) + "#" : "#" + ".".repeat(b - 1);
      right = !right;
    }
    print(line);
  }
}
