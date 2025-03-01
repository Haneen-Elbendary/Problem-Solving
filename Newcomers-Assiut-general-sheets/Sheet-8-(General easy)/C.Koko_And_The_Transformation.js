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
  inputString = inputString.split("\n").map((line) => line.trim()); // Trim whitespace
  main();
});

function readline() {
  return inputString[currentLine++];
}

// ********** Code Start **********

function main() {
  //************************** First version ****************
  // let n = 3;
  // let line = [];
  // for (let i = 0; i < n; i++) {
  //   line.push(readline());
  // }
  // let aLen = line[0].split(" ")[0];
  // let bLen = line[0].split(" ")[1];
  // let a = line[1].split(" ");
  // a = a.map(Number);
  // let b = line[2].split(" ");
  // b = b.map(Number);
  // let sumA = a.reduce((pre, curr) => {
  //   return pre + curr;
  // }, 0);
  // let sumB = b.reduce((pre, curr) => {
  //   return pre + curr;
  // }, 0);
  // if (sumA === sumB) print("Yes");
  // else print("No");
  //************************** Optimized version ****************
  let [aLen, bLen] = readline().trim().split(" ").map(Number);
  let a = readline().trim().split(" ").map(Number);
  let b = readline().trim().split(" ").map(Number);
  let sumA = a.reduce((pre, acc) => pre + acc, 0);
  let sumB = b.reduce((pre, acc) => pre + acc, 0);
  print(sumA === sumB ? "Yes" : "No");
}
