function bubble(arr) {
  const result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const array = '21 10 12 20 25 13 15 22'.split(' ').map(n => parseInt(n, 10));

console.log(bubble(array));
