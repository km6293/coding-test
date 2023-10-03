// 주의
// 1. 1 ≤ B < A ≤ V ≤ 1,000,000,000
// 2. 시간 제한 0.25 초 (2500만번의 연산 가능) -> 1초당 대략 1억번 기준
// 3. 위의 제한을 생각하면 while, for문으로는 한계


let [A, B, V] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(' ').map(Number);
// let [A, B, V] = require('fs').readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

// 단순히 V / (A - B) 를 하게 된다면 
// ex) input : 2 1 5 ouput : 4 가 아닌 5를 표출하게 된다.

// 하루동안 움직인 거리 : A - B
// 전부 올라간 전날 : V - A (A만 빼는 이유는 바로 전날이기 때문에, -B를 할 필요가 없다..)

// 경우의 수
// 1. 나누어 떨어졌을때 : 0
// 2. 나누어 떨어지지 않았을 때 : + 1을 더 해줘야 한다. 왜냐하면  -> ceil 한 이유

// 마지막으로 빼두었던 A, 즉 + 1 을 해줘야 한다.



console.log( Math.ceil((V - A) / (A - B)) + 1)
