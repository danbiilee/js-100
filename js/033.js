/*
한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

```
입출력

입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2
```
*/

//const numbers = '2 4 6 7 8'.split(' ');
//console.log(numbers.reverse().join(' '));

const str = '1 2 3 4 5';

const getReverse = (spliter, joiner) => {
  let numbers = [];
  let result = '';

  // 문자열을 역순 배열로 분리하기
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== spliter) numbers.unshift(str[i]);
  }

  // 다시 문자열로 합치기
  for (let n of numbers) {
    if (n === numbers[numbers.length - 1]) result += n;
    else result += n + joiner;
  }

  return result;
};

console.log(getReverse(' ', ' '));
