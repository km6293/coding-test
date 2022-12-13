function solution(s) {
  let arr = s.split(' ');
  arr.forEach((e,i) => {
    if(e[0] != undefined){
      arr[i] = e[0].toUpperCase() + e.substring(1,e.length).toLowerCase();
    }
  })
  return arr.join(' ')
}


console.log(solution("3people unFollowed me"),	"3people Unfollowed Me")
// console.log(solution("for the last  week"),	"For The Last Week")


