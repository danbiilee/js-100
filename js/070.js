/**
 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 
 곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램

입력
a = [[1, 2],
		[2, 4]]

b = [[1, 0],
		[0, 3]]

출력
[[1, 6], [2, 12]]
 */
const a = [
  [1, 2],
  [2, 4],
];
const b = [
  [1, 0],
  [0, 3],
];

const getResult = (a, b) => {
  const length = a[0].length;
  let check = length === b.length ? true : false;
  if (!check) {
    return -1;
  }

  let result = [];
  for (let i = 0; i < length; i++) {
    // a행
    let row = [];
    for (let j = 0; j < length; j++) {
      // a열
      let x = 0;
      for (let k = 0; k < length; k++) {
        x += a[i][k] * b[k][j];
      }
      row.push(x);
    }
    result.push(row);
  }
  return result;
};
console.log(getResult(a, b));
