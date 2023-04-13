function solution(num_list) {
  let add = num_list.filter(e => e % 2 == 1).length
  return [num_list.length - add, add];
}

// console.log(solution([1, 2, 3, 4, 5]),[2, 3])
console.log(solution([1, 3, 5, 7]	),[0, 4])