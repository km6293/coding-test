function solution(phone_number) {
    return phone_number.replace(phone_number.slice(0,phone_number.length-4),"*".repeat(phone_number.length-4))
}

console.log(solution("027778888"))

// 인기 많은 풀이
// https://inpa.tistory.com/entry/JS-📚-정규식-RegExp-누구나-이해하기-쉽게-정리
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
  // / 시작
  // \d 숫자
  // (?=) 앞쪽과 일치
}