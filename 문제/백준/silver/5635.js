// const input = require('fs').readFileSync(__dirname + "/../input.txt").toString().split("\n");;
const input = require('fs').readFileSync("/dev/stdin").toString().split("\n");;
input.shift();

let old = { name : '', day : 32, month : 13, year : 2021 };
let young = { name : '', day : 0, month : 0, year : 1989 };

for(let i = 0; i < input.length; i++){
  let [name, day, month, year] = input[i].split(' ');

  if((parseInt(year) < old.year )
  || (parseInt(year) == old.year && parseInt(month) < old.month)
  || (parseInt(year) == old.year && parseInt(month) == old.month && parseInt(day) < old.day)
  ){
    old.name = name;
    old.day = parseInt(day);
    old.month = parseInt(month);
    old.year = parseInt(year);
  }   

  if((parseInt(year) > young.year)
  || (parseInt(year) == young.year && parseInt(month) > young.month)
  || (parseInt(year) == young.year && parseInt(month) == young.month && parseInt(day) > young.day)
  ){
    young.name = name;
    young.day = parseInt(day);
    young.month = parseInt(month);
    young.year = parseInt(year);
  }   
}

console.log(young.name);
console.log(old.name);