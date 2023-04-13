function solution(my_string, letter) {
  return my_string.split('').filter(e => e != letter).join('')
}

function solution2(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

console.log(solution("BCBdbe"	,"B"),"Cdbe")