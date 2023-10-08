const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/../input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

let [aArr, bArr] = [input[0].split(" "), input[1].split(" ")];
aArr = aArr.sort((a, b) => b - a);
bArr = bArr.sort((a, b) => a - b);

let cnt = 0;
for (let i = 0; i < n; i++) {
  cnt += parseInt(aArr[i]) * parseInt(bArr[i]);
}

console.log(cnt);
