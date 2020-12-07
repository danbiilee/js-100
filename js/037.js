/*
학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

```
입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.
```
*/

const data = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ');

let candidates = {};

for(const item of data) {
	candidates[item] ? candidates[item]++ : candidates[item] = 1;
}

let theOne = '';
let count = 1;
// for(const key in candidates) {
// 	if(candidates[key] > count) {
// 		count = candidates[key];
// 		theOne = key;
// 	}
// }
// console.log(`${theOne}(이)가 총 ${count}표로 반장이 되었습니다`);


theOne =  Object.keys(candidates).reduce(function(a, b){
  return candidates[a] > candidates[b] ? a : b
});

console.log(theOne);