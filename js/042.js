/*
2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

**제한 조건**
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다. 
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

const a = parseInt('12', 10);
const b = parseInt('11', 10);

// // 윤년 - 2월은 29일까지
// const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// const days = ['WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE'];

// const solution = () => {
// 	let result = '';

// 	// 1월 1일부터 주어진 날짜까지의 총 day 수 구하기 
// 	let daySum = 0;
// 	for(let i = 1; i < a; i++) {
// 		daySum += months[i - 1];
// 	}
// 	daySum += b;

// 	// 수요일을 기준으로 days 배열 index 찾기 
// 	let idx = daySum % 7;
// 	idx = !idx ? days.length - 1 : idx - 1; 

// 	result = days[idx];
// 	return result;
// }

// console.log(solution());

const solution = (m, d) => {
	const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

	const date = new Date(`2020-${m}-${d}`);
	return days[date.getDay()];
}

console.log(solution(a, b));