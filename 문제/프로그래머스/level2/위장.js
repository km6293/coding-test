function solution(clothes){

  let cnt = 1;
  let obj = {}
  
  for(let i = 0; i < clothes.length; i++){
    let key = clothes[i][1];
    Object.keys(obj).includes(key) ? obj[key] += 1 : obj[key] = 1
  }
  
  let arr = Object.values(obj);
  for(let i = 0; i < arr.length; i++){
    cnt *= (arr[i] + 1)
  }
  return cnt -1
}

console.log(solution(
  [
    ["yellow_hat", "headgear"], 
    ["blue_sunglasses", "eyewear"], 
    ["red_sunglasses", "eyewear"], 
    ["green_turban", "headgear"],
    ["red_turban", "headgear"]
  ]), 11);

  // 중복값 => 2개 
  // 기본 값 => 5, (최소 한개) 
  // 조합 값 => 2 * 3 => 6

// console.log(solution(
//   [
//     ["yellow_hat", "headgear"], 
//     ["blue_sunglasses", "eyewear"], 
//     ["green_turban", "headgear"]
//   ]), 5);

// console.log(solution(
//   [
//     ["crow_mask", "face"], 
//     ["blue_sunglasses", "face"], 
//     ["smoky_makeup", "face"]
//   ]), 3);