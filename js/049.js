/*
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.


```js
입출력

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10
```
*/

// const nums = '10 9 45 33 123 2 2 4234 23 23 2'.split(' ');
// let comp = nums[0];

// for(let i = 1; i < nums.length - 1; i++) {
// 	const n = parseInt(nums[i], 10);

// 	if(n > comp) {
// 		comp = n;
// 	}
// }

// console.log(comp);


let numbers = '10 9 8 7 6 5 4 3 2 1'.split(' ').map((n) => {
  return parseInt(n, 10);
});

numbers.sort((a, b) => {
  return a-b;
});

console.log(numbers[0]);