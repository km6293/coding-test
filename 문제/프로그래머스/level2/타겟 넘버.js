function solution(arr, target){
  let cnt = 0;

  function dfs(sum , len){
    if(len == arr.length){
      if(sum == target) cnt += 1;
    }else{
      dfs(sum + arr[len], len+1);
      dfs(sum - arr[len], len+1);
    }
  }

  dfs(0, 0);
  return cnt
}

// console.log(solution([1, 1, 1, 1, 1], 3), 5)
console.log(solution([4, 1, 2, 1], 4), 2)