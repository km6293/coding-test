function solution(str) {
  // str 중 최초 특수문자 => ex) 352+*9- 중 최초 특수문자 : '+'
  let fOpe = str.search(/\D/);
  // 최초 숫자 : 위의 특수문자 인덱스 기준 -2
  let val = str[fOpe - 2];
  // 최초 숫자를 제외한 나머지 다시 붙이기
  str = str.substring(0, fOpe - 2) + str.substring(fOpe - 1, str.length);

  // while(isNaN)

  // let cnt, nVal;
  // while (isNaN(str)) {
  //   // 연산자일 경우
  //   if (isNaN(str[cnt])) {
  //     if (str[cnt] == "+") {
  //       nVal += str[cnt - 2] + str[cnt - 1];
  //     }
  //     if (str[cnt] == "-") {
  //       nVal += str[cnt - 2] - str[cnt - 1];
  //     }
  //     if (str[cnt] == "*") {
  //       nVal += str[cnt - 2] * str[cnt - 1];
  //     }
  //     if (str[cnt] == "/") {
  //       nVal += str[cnt - 2] / str[cnt - 1];
  //     }
  //     cnt = 0;
  //   }
  //   str = 0;
  //   cnt += 1;
  // }
}
console.log(solution("352+*9-"), 12);
