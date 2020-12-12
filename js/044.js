/*
**사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.

```
입출력

입력 : 18234
출력 : 18

입력 : 3849
출력 : 24
```
*/

// const num = '3849';
// let result = 0;

// for (const n of num) {
//   result += parseInt(n, 10);
// }

// console.log(result);

let num = parseInt('18234', 10);
let result = 0;

while (num) {
  result += num % 10;
  num = Math.floor(num / 10);
  console.log(result, num);
}
