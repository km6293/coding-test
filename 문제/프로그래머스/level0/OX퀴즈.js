function solution(arr){
  return arr.map(e => {
    let s = e.split(' ');
    return (s[1] == '+' && (parseInt(s[0]) + parseInt(s[2]) == parseInt(s[4]))) || 
            (s[1] == '-' && (parseInt(s[0]) - parseInt(s[2]) == parseInt(s[4]))) ? "O" : "X"
  })
}

console.log(solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]), ["O", "O", "X", "O"])