/*
민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.)

```
입출력

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES
```
*/

const data = '176 156 155 165 166 169';
const sorted = data.split(' ').sort().join(' ');

const isSorted = data === sorted;

console.log(isSorted ? 'YES' : 'NO');

// const origin = data.split(' '); // 원본 데이터
// const sorted = data.split(' ').sort(); // 정렬된 데이터
// const getSortAt = () => {
//   // origin과 sorted 다름 여부
//   let isDiff = false;

//   // 출력 데이터 구하기
//   const getResult = () => {
//     return isDiff ? 'NO' : 'YES';
//   };

//   for (let i = 0; i < sorted.length; i++) {
//     if (sorted[i] !== origin[i]) {
//       isDiff = !isDiff;
//       return getResult();
//     }
//   }

//   return getResult();
// };

// console.log(getSortAt());

// 답안
// const unsorted = '176 156 155 165 166 169';
// let sorted = '';

// sorted = unsorted
//   .split(' ')
//   .sort(function (a, b) {
//     console.log(a, b);
//     return a - b;
//   })
//   .join(' ');

// if (unsorted === sorted) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }
