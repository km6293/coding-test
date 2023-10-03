const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/../input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split(/\s/);

let arr = [];
for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "(") cnt += 1;
    else {
      if (cnt == 0) {
        cnt = -1;
        break;
      }
      cnt -= 1;
    }
  }
  arr.push(cnt == 0 ? "YES" : "NO");
}

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
