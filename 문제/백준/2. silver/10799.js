const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/../input.txt";
const str = fs.readFileSync(filePath).toString().trim();

let [chkVal, totalVal] = [0, 0];
for (let i = 0; i < str.length; i++) {
  if (str[i] == "(") chkVal += 1;
  else {
    chkVal -= 1;
    str[i - 1] == "(" ? (totalVal += chkVal) : (totalVal += 1);
  }
}

console.log(totalVal);
