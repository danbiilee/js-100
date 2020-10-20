/*
몫과 나머지
입력 : 10 2
출력 : 5 0
*/

const nums = '7 4'.split(' ').map(num => parseInt(num, 10));
const result = Math.floor(nums[0] / nums[1]) + ' ' + (nums[0] % nums[1]);

console.log(result);

// const result = Math.floor(parseInt(nums[0], 10) / parseInt(nums[1], 10));
// const left = parseInt(nums[0], 10) % parseInt(nums[1], 10);
// console.log(result, left);
