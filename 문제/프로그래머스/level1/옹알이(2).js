function solution(babbling) {
  let cnt = 0;
  babbling.forEach(e => {
    if(/a|e|y|w|o|m/.test(e)){
      let str = e;
      if(!/ayaaya|yeye|woowoo|mama/.test(e)){
        str = str.replace(/aya/g,'1')
                 .replace(/ye/g, '1')
                 .replace(/woo/g, '1')
                 .replace(/ma/g, '1');
        if(!isNaN(str)) cnt += 1;
      }
    }
  })
  return cnt
}

// console.log(solution(["wooyemawooye", "mayaa", "ymaeaya"]), 1);
// console.log(solution(["aya", "yee", "u", "maa", "wooayayewoowoo"]),1)
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "wooyemawooyee"]),2)