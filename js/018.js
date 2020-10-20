/*
입력 : 20 30 40
출력 : 30
*/

let scores = '20 30 45';
scores = scores.split(' ');

let average = scores.reduce((acc, val) => {
  return parseInt(acc, 10) + parseInt(val, 10);
});
average = Math.floor(average / 3);

console.log(average);
