const arr = [
  ["aaa", "12:50", "20"],
  ["bbb", "12:10", "30"],
  ["ccc", "12:40", "10"]
];

arr.sort((a, b) => {
  const timeA = a[1];
  const timeB = b[1];
  
  if (timeA < timeB) {
    return -1;
  } else if (timeA > timeB) {
    return 1;
  } else {
    return 0;
  }
});

console.log(arr);