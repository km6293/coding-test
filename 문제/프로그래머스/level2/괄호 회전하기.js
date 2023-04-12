function solution(s){

  let [a, b, c] = [0,0,0]
  let cnt = 0;

  for(let i = 0; i < s.length; i++){
    val = s[0];
    s = s.substring(1,s.length) + s[0];
    let chk = false;
    let [aArr,bArr,cArr] = [[],[],[]]
    for(let r = 0; r < s.length; r++){
      if(s[r] == '['){
        a += 1;
        aArr.push(r)
      }else if(s[r] == ']'){
        a -= 1;
        if(a < 0 || (r + aArr.pop()) % 2 != 1){
          chk = true;
          break;
        }
      }else if(s[r] == '{'){
        b += 1;
        bArr.push(r)
      }else if(s[r] == '}'){
        b -= 1;
        if(b < 0 || (r + bArr.pop()) % 2 != 1){
          chk = true;
          break;
        }
      }else if(s[r] == '('){
        c += 1;
        cArr.push(r)
      }else if(s[r] == ')'){
        c -= 1;
        if(b < 0 || (r + cArr.pop()) % 2 != 1){
          chk = true;
          break;
        }
      }
      if(a < 0 || b < 0 || c < 0) {
        chk = true;
        break;
      }
    }
    if(!chk && (a % 2 == 0 && b % 2 == 0 && c % 2 == 0)) cnt += 1;
    [a,b,c] = [0,0,0];
  }
  return cnt
}

console.log(solution("[](){}"), 3) 
// console.log(solution("}]()[{"), 2)
// console.log(solution("[)(]"), 0)
// console.log(solution("}}}"), 0)
// console.log(solution("[{]}"), 0)
// [](){} 0 1  2 3
// [()]{} 0 3  1 2
// [({})] 0 5
