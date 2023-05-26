function solution(arr){

  let nickNameMap = {};
  let [idList, recordList] = [[],[]];
  arr.forEach(e => {

    let [record, id, nickName] = e.split(' ');

    if(record == 'Enter' || record == 'Change') nickNameMap[id] = nickName
    if(record === 'Enter'){
      idList.push(id);
      recordList.push('님이 들어왔습니다.');
    }else if(record === 'Leave'){
      idList.push(id);
      recordList.push('님이 나갔습니다.');
    }
  })

  let returnList = [];
  for(let i = 0; i < idList.length; i++) returnList.push(nickNameMap[idList[i]]+recordList[i]);    

  return returnList
}

console.log(solution(
  ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
), ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."])


