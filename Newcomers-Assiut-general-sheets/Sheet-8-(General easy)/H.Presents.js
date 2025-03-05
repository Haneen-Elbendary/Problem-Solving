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
  //   let p = readline().split(" ").map(Number);
  //   let m = new Map();
  //   for (let i = 1; i <= n; i++) {
  //     m.set(i, p[i - 1]);
  //   }
  //   let res = [];
  //   for (let i = 1; i <= n; i++) {
  //     m.forEach((value, key) => {
  //       if (value === i) res.push(key);
  //     });
  //   }
  //   print(res.join(" "));
  //************************** Optimized version ****************
  let n = parseInt(readline());
  let p = readline().split(" ").map(Number);
  let r = new Array(n);
  for (let i = 0; i < n; i++) {
    r[p[i] - 1] = i + 1;
  }
  print(r.join(" "));
}
