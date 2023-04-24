function solution(arr,k){
  let nArr = arr.split('')
  let m = arr.length - k;

  function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
    return results;
  }

  let cArr = getCombinations(nArr, m);
  let val = 0;
  cArr.map(e => {
    let num = parseInt(e.join(''));
    if(num > val) val = num
  })
  return val.toString()
}

console.log(solution("1924",2),"94");
