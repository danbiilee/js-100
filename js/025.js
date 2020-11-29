/*
  반지름의 길이 정수 n이 주어지면 
  원의 넓이를 반환하는 함수를 만들기
*/

const n = prompt('반지름 길이 입력');
const getCirlceArea = n => {
  return Math.pow(n, 2) * 3.14;
};

console.log(getCirlceArea(n));
