let year = '2019';
let month = '04';
let day = '26';
let hour = '11';
let minute = '34';
let second = '27';

let result = year.concat('/').concat(month)
									.concat('/').concat(day)
									.concat(' ').concat(hour)
									.concat(':').concat(minute)
									.concat(':').concat(second);

result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);									

console.log(result);

/*
	출력
	2019/04/26 11:34:27
*/
