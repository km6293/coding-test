function solution(n) {
  let val = 1n; 
  let d = n / 2;

  function rVal(a, b) {
    let aVal = 1n; 
    let bVal = 1n; 
    for (let i = 0; i < b; i++) {
      aVal *= BigInt(a - i); 
      bVal *= BigInt(i + 1); 
    }
    return aVal / bVal; 
  }

  for (let i = 1; i <= d; i++) {
    val += rVal(n - i, i);
  }

  return Number(val % 1234567n); 
}