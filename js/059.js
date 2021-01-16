/*
총 문자열의 길이는 50으로 제한하고 
사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 
나머지 빈 부분에는 '='을 채워 넣어주세요.
// 짝수: 각각 50/2 - 글자수/2
24 2 24
24 1 25
// 홀수: 위에서 왼쪽에만 -1  
*/

const limit = 50;
const str = 'hii';
//let result = '';
// const div = Math.floor((limit - str.length) / 2);

// for (let i = 0; i < div; i++) {
//   result += '=';
// }

// result += str;

// for (let i = result.length; i < limit; i++) {
//   result += '=';
// }

const n = limit / 2 + parseInt(str.length / 2, 10);
const result = str.padStart(n, '=').padEnd(limit, '=');

console.log(parseInt(str.length / 2, 10), n, result, result.length);
