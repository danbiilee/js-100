/*
버스 시간표와 현재 시간이 주어졌을 때 
버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다.
   만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

```
입력
["12:30", "13:20", "14:13"]
"12:40"

출력
['지나갔습니다', '00시간 40분', '01시간 33분']
*/

const times = ['12:30', '13:20', '14:13'];
const now = '12:40';

function make2Digit(n) {
  return n < 10 ? `0${n}` : n;
}

function getBusArrivedDiff(times, now) {
  let result = [];
  const d = new Date();
  d.setHours(now.split(':')[0], now.split(':')[1]);

  for (let time of times) {
    const t = new Date();
    t.setHours(time.split(':')[0], time.split(':')[1]);

    if (t - d < 0) {
      result.push('지나갔습니다');
      continue;
    }
    const diff = new Date(t - d);
    result.push(
      `${make2Digit(diff.getUTCHours())}시간 ${make2Digit(
        diff.getUTCMinutes(),
      )}분`,
    );
  }

  return result;
}

console.log(getBusArrivedDiff(times, now));
