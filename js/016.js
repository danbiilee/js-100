/*
입력 : 거꾸로
출력 : 로꾸거
*/

const str = '거꾸로';
let reverse = '';

/* for (let i in str) {
	reverse += str[(str.length-i)-1];
} */

reverse = str.split('').reverse().join('');
console.log(reverse);
