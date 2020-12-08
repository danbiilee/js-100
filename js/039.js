/*
**문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.**

```
입출력

입력 : querty
출력 : euerty

입력 : hqllo my namq is hyqwon
출력 : hello my name is hyewon
```
*/

const data = 'hqllo my namq is hyqwon';

//console.log(data.replace(/q/g, 'e'));

function replaceAll(str, searchWord, changeWord) {
	console.log(str.split(searchWord).join(changeWord));
}

replaceAll(data, 'q', 'e');