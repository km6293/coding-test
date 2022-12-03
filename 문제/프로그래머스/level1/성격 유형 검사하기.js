function solution(survey, choices) {
  let obj = {
    "R" : 0, "T" : 0, "C" : 0, "F" : 0, "J" : 0, "M" : 0, "A" : 0, "N" : 0
  }

  survey.forEach((e,i) => obj[(4 - choices[i]) > 0 ? e[0] : e[1]] += Math.abs(4 - choices[i]))
  var str = '';

  obj.R >= obj.T ? str += 'R' : str += 'T';
  obj.C >= obj.F ? str += 'C' : str += 'F';
  obj.J >= obj.M ? str += 'J' : str += 'M';
  obj.A >= obj.N ? str += 'A' : str += 'N';

  return str;
}

// console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]),	"TCMA");
console.log(solution(["TR", "RT", "TR"],	[7, 1, 3]),	"RCJA");



