/*
a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 
a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

// let result = [];
// for (let i in a) {
//   const temp = [];
//   if (i % 2 === 0) {
//     temp.push(a[i]);
//     temp.push(b[i]);
//   } else {
//     temp.push(b[i]);
//     temp.push(a[i]);
//   }
//   result.push(temp);
// }

const result = a.map((a, i) => {
  if (i % 2 === 0) {
    return new Array(a, b[i]);
  } else {
    return new Array(b[i], a);
  }
});

console.log(result);
