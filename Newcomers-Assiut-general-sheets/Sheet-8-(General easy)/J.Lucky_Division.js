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
  // const luckyNumbers = [
  //   4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777,
  // ];
  // let x = readline().trim();
  // let nX = parseInt(x);
  // for (let i = 0; i < luckyNumbers.length; i++) {
  //   if (nX % luckyNumbers[i] === 0) return print("YES");
  // }
  // print("NO");

  //************************** Optimized version ****************
  // set faster than the array
  const luckyNumbers = new Set([
    4, 7, 44, 47, 74, 77, 444, 447, 474, 477, 744, 747, 774, 777,
  ]);
  let x = parseInt(readline().trim());
  for (let num of luckyNumbers) {
    if (x % num === 0) return print("YES");
  }
  print("NO");
}
