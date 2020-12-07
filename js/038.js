/*
1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
**학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

```
입출력

입력 : 97 86 75 66 55 97 85 97 97 95
출력 : 6
```
*/

// const scores = '97 86 75 66 55 97 85 97 97 95'.split(' ');

// // 자동 정렬이 되네...?
// const countedScores = scores.reduce((allScores, score) => {
// 	if(score in allScores) {
// 		allScores[score]++;
// 	} else {
// 		allScores[score] = 1;
// 	}
// 	return allScores;
// }, {});

// let count = 0;
// Object.keys(countedScores).forEach((key, idx, arr) => {
// 	if(idx > arr.length - 4 && idx < arr.length) {
// 		console.log(key, idx);
// 		count += countedScores[key];
// 	}
// });

// console.log(count);


const scores = '97 86 75 66 55 97 85 97 97 95'.split(' ');
scores.sort((a, b) => a - b);

let arr = [];
let count = 0;

while(arr.length < 3) {
	let score = scores.pop();
	if(!arr.includes(score)) {
		arr.push(score);
	}
	count++;
}

console.log(count);