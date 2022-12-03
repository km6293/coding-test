function solution(new_id) {
  let str = new_id.toLowerCase();
  str = str.replace(/[^a-z0-9-_.]/g, '');
  str = str.replace(/\.+/g, '.');
  str[0] == '.' ? str = str.substr(1) : str[str.length-1] == '.' ? str = str.substr(0, str.length-1) : str = str;
  if(str.length > 14) str = str.substr(0,15);
  if(str == '') str = 'a';
  str[0] == '.' ? str = str.substr(1) : str[str.length-1] == '.' ? str = str.substr(0, str.length-1) : str = str;
  if(str.length < 3) str += str[str.length-1].repeat(3-str.length);
  return str
} 


console.log(solution("...!@BaT#*.....y.abcdefghijklm"), '=====>'	,"bat.y.abcdefghi")
// console.log(solution("z-+.^."),	"z--")
// console.log(solution("=.="),	"aaa")
// console.log(solution("123_.def"),	"123_.def")
// console.log(solution("abcdefghijklmn.p"),	"abcdefghijklmn")
// console.log(solution("a.$.a"),"a.a");
// console.log(solution(".............................b....."),"aaa")
// console.log(solution('.....aa123...s...d....s...dd.............b.....da....'),'bbb');

