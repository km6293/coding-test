function solution(s, skip, index) {
  let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  alphabet = alphabet.filter(e => !skip.includes(e));
  let val = '';
  for(let i = 0; i < s.length; i++){
    let sIndex = alphabet.indexOf(s[i]);
    sIndex + index < alphabet.length ? val += alphabet[sIndex+index] : val += alphabet[(sIndex+index)%alphabet.length]
  }
  return val;
}