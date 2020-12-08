/*
**원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

```
입력
50
5
20
20
20
20
20

출력
2
```
*/

// const limit = '50';
// const n = '5';
// const weights = '20 20 20 20 20'.split(' ').map(weight => parseInt(weight, 10));

// let index = 0;
// let temp = 0;

// while(temp <= 50) {
// 	temp += weights[index++];
// }

// console.log(index-1);




const limit = '50';
const n = '5';

let totalWeight = 0;
let count = 0;

for(let i = 1; i <= n; i++) {
	totalWeight += parseInt('20', 10);
	if(totalWeight <= limit) {
		count = i;
	}
}

console.log(totalWeight, count);