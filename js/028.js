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
	// 주어진 연속 자리수 이전까지만 반복하기
	if(i <= str.length - n) {
		let result = '';
		// 연속된 수만큼 반복해서 문자열 출력
		for(let j = i; j < i + n; j++) {
			result += `${str[j]} `;
		}
		console.log(result);
	}
}
