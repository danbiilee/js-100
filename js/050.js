// function bubble(arr) {
//   let result = arr.slice(); 

//   for (let i = 0; i < result.length - 1; i++) {
//     for (let j = 0; j < result.length - (1 + i); j++) {
//       if (result[j] > result[j + 1]) {
// 				result.splice(j, 2, result[j + 1], result[j]);
//       } 
//     }
//   }
//   return result;
// }

// const items = '7 4 5 1 3'.split(' ').map((n) => {
//   return parseInt(n, 10);
// });

// console.log(bubble(items));


function bubble(arr) {
  let result = arr.slice(); 

  // result.length = 5
  // j = 0 ~ (5-0)
  // j = 0 ~ (5-1)
  // j = 0 ~ (5-2)
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      console.log(result[j], result[j + 1]);
      if (result[j] > result[j + 1]) {
        result.splice(j, 2, result[j + 1], result[j]);
        console.log(result);
      }
    }
  }
  return result;
}

const items = '7 4 5 1 3'.split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));