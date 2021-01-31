/*
탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

```
입력
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

출력
["가능", "불가능", "가능", "가능", "가능"]
*/

const arr = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
const rule = 'ABD';

// 1. 각 아이템, 각 블럭을 돌면서 rule에 맞는 블럭이 있는지 확인
// 2. 매칭되는 블럭들의 순서가 맞는지 확인
//    - 이전 인덱스와 현재 인덱스를 비교: 계속 커지면 가능, 감소되면 불가능(순서 뒤바뀜)

function getResult(arr, rule) {
  let result = [];
  for (let item of arr) {
    result.push(checkBlockOrder(item, rule));
  }
  return result;
}

function checkBlockOrder(item, rule) {
  let tempIndex = 0;
  for (let b of item) {
    if (rule.includes(b)) {
      if (tempIndex > rule.indexOf(b)) {
        return '불가능';
      }
      tempIndex = rule.indexOf(b);
    }
  }
  return '가능';
}

console.log(getResult(arr, rule));
