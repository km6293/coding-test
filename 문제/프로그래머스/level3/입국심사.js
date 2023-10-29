// 로그 시간 = 이진 탐색
// times -> 선형 로그 시간으로 충분히 가능

// 특정 값을 찾는 것이 아니다.
// 최소 몇 분에 모든 심사가 끝나는가?
// -> 결정 문제 = 이진 탐색 = 파라메트릭 서치 (Parametric Search)

// 최소 1분 ~ 10억분 * n 사이
// 면접관들이 몇 명을 처리하는가?
// 처리 가능한 입국자 n보다 작다면, 분을 올리고, 입국자가 n보다 크다면 분을 낮춘다.
// 면접관이 시간대비 몇 명을 처리 할 수 있는가?
// 시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수

function solution(n, times) {

  const sortedTimes = times.sort((a,b) => a - b);

  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while(left <= right){
    mid = Math.floor((left + right) / 2);

    const sum = sortedTimes.reduce((acc ,time) => acc + Math.floor(mid / time), 0);
    
    sum < n ? left = mid + 1 : right = mid - 1;
  }
  return left;
}

// 테스트 케이스
const n = 6;
const times = [7, 10];
console.log(solution(n, times)); // 출력 결과: 28
