/*
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

```js
입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
```
*/

const str = 'AAABBBcccddd';
let result = '';

for(const s of str) {
  if(/[A-Z]/.test(s)) {
    result += s.toLowerCase();
  } else {
    result += s.toUpperCase();
  }
}

console.log(result);


