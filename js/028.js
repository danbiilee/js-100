/*
2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법

입력
Javascript

출력
J a
a v
v a
a s
s c
c r
r i
i p
p t
*/

const str = 'Javascript';
const n = 2;

for(let i = 0; i < str.length; i++) {
	if(i <= str.length - n) {
		console.log(`${str[i]} ${str[i+1]}`);
	}
}
