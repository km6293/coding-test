function solution(plans) {
    
  // 시 -> 분
  plans = plans.map(([name, time, playtime]) => {
      const [hour, minute] = time.split(':');
      return [name, parseInt(hour) * 60 + parseInt(minute), parseInt(playtime)];
  })
  
  // 시간순으로 정렬
  plans.sort((a,b) => a[1] - b[1]);
  
  // 덜한 과제, return할 list
  let queue = [];
  let rArr = [];
  
  // plan 마지막 전까지만 비교
  for(let i = 0 ; i < plans.length -1; i++){
      let [name, start, playtime] = plans[i];
      let [nName, nStart, nPlaytime] = plans[i+1];
      let dif = Math.abs(nStart - start - playtime);
      
      if(nStart - start >= playtime){
          rArr.push(name);
          
          while(queue.length > 0 && dif > 0){
              let [rName, rPlaytime] = queue.pop();
              
              if(rPlaytime <= dif){
                  rArr.push(rName);
                  dif -= rPlaytime;
              }else{
                  queue.push([rName, rPlaytime - dif]);
                  break;
              }                    
          }
      }else if(nStart - start < playtime){
          queue.push([name, dif]);
      }
  }
  
  let val = queue.map(e => e[0]).reverse();
  return [...rArr, plans[plans.length-1][0], ...val];
}