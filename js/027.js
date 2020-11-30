/*
입력
Yujin Hyewon
70 100

출력
{'Yujin': 70, 'Hyewon': 100}
*/

const name = 'Yujin Hyewon';
const score = '70 100';

const names = name.split(' ');
const scores = score.split(' ');

let obj = {};
names.forEach((item, index) => {
	obj[item] = Number(scores[index]);
});
console.log(obj);

