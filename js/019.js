/*
  공백으로 구분하여 두 숫자 a와 b가 주어지면, 
  **a의 b승**을 구하는 프로그램
*/

const nums = '3 4'.split(' ').map(num => parseInt(num, 10));
let result = 1;
for (let i = 0; i < nums[1]; i++) {
  result *= nums[0];
}
console.log(result);

console.log(Math.pow(nums[0], nums[1]));
