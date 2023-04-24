function solution(numbers) {  
  function isPrime(num) {
    if(num === 0 || num === 1) return false;
    if(num === 2) return true;
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) return false; 
    }
    return true; 
  }

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      const permutations = getPermutations(rest, selectNumber - 1); 
      const attached = permutations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
    return results; 
  }

  let arr = numbers.split('');
  let cnt = 1;
  let sArr = new Set('');
  
  while(cnt != arr.length + 1){
    let r = getPermutations(arr, cnt);
    r.map(e => {
      let val = parseInt(e.join(''));
      if(!sArr.has(val) && isPrime(val)) sArr.add(val)
    })
    cnt += 1;
  }
  return sArr.size;
}

console.log(solution("1234"), 3)