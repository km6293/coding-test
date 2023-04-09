function solution(cards1, cards2, goal) {
  
  let [a,b] = [0,0];
  for(let i = 0; i < goal.length; i++){
     
    if(goal[i] == cards1[a]){
      a += 1;
    }else if(goal[i] == cards2[b]){
      b += 1;
    }else{
      return "No"
    }
  }
  return "Yes"

}

// console.log(solution(["i", "drink", "water"],	["want", "to"],	["i", "want", "to", "drink", "water"]), "YES")
console.log(solution(["i", "water", "drink"],	["want", "to"],	["i", "want", "to", "drink", "water"]), "NO")
