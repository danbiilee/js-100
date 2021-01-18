/**
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

입력
aaabbbbcdddd

출력
a3b4c1d4
 */

const data = 'aaabbbbcdddd';
let store = data[0];
let count = 0;
let result = '';

for (let s of data) {
  if (s === store) {
    count++;
  } else {
    result += store + count;
    store = s;
    count = 1;
  }
}
result += store + count;

console.log(result);
