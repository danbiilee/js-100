/*
스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 
이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오.
*/

let nums = '1 2 4 3 5'.split(' ').map(s => parseInt(s, 10));
nums = nums.sort((a, b) => a - b);

let result;

for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] + 1 === nums[i + 1]) {
    result = true;
  } else {
    result = false;
  }
}

console.log(result ? 'YES' : 'NO');
