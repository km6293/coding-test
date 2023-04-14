function solution(s){
  let mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const alphabetArray = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
  return s.split(' ').map(e => (alphabetArray[mos.findIndex(r => r == e)])).join('')
}

console.log(solution(".... . .-.. .-.. ---"), "hello")

