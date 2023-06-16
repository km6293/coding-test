const input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n")
// const input = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");

let vowels = ['i','e','u','o','a'];

for(let i = 0; i < input.length-1; i++){
  
  const word = input[i];
  let chk = true;

  // 모음 하나 포함
  if(!vowels.some(vowel => word.includes(vowel))) chk = false;
  
  // 모음 or 자음 연속 3번 x
  if(chk){
    for(let r = 0; r < word.length-2; r++){
      const slice = word.slice(r, r + 3);
      if((vowels.includes(slice[0]) && vowels.includes(slice[1]) && vowels.includes(slice[2])) ||
      (!vowels.includes(slice[0]) && !vowels.includes(slice[1]) && !vowels.includes(slice[2]))){
        chk = false;
        break;
      }
    }
  }

  // 같은 글자 안됨, (ee, oo 가능)
  if(chk){
    for(let r = 0; r < word.length-1; r++){
      if( word[r] === word[r+1] && (word[r] != 'e' && word[r+1] != 'e' ) && (word[r] != 'o' && word[r+1] != 'o') ){
        chk = false;
        break;
      }
    }
  }  
  
  let acceptability = chk ? 'acceptable.' : 'not acceptable.';
  console.log(`<${word}> is ${acceptability}`);
}