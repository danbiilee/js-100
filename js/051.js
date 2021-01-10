// 분할
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  console.log(left, right);

  return merge(mergeSort(left), mergeSort(right));
}

// 정렬
function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = '21 10 12 20 25 13 15 22'.split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));
