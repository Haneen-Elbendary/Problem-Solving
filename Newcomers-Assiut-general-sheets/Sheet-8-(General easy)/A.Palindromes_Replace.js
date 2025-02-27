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
function resolveQ(s) {
  //7 7/2 =3
  if (s.length % 2 !== 0) s[s.length / 2] = "a";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "?" && s[s.length - i - 1] === "?") {
      s[i] = "a";
      s[s.length - i - 1] = "a";
    }
    if (s[i] === "?") s[i] = s[s.length - i - 1];
  }
  return s;
}
function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}
function main() {
  let s = readline().trim();
  // 1- resolve the 2
  if (s.includes("?")) s = resolveQ(s.split("")).join("");
  if (isPalindrome(s)) print(s);
  else print(-1);
}
