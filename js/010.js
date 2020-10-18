/*
입력
5

출력 : 총 9칸
    *			공백 4 / 별 1 (5) / 공백 4
   ***		공백 3 / 별 3 (4 5 6) / 공백 3
  *****		공백 2 / 별 5 (3 4 5 6 7) / 공백 2
 *******	공백 1 / 별 7 (2 ... 8) / 공백 1
********* 공백 0 / 별 9 (1 ... 9) / 공백 0
*/


const num = 5;
for(let i=num; i>=1; i--) { // 행 
	let str = '';
	for(let j=1; j<=9; j++) { // 열 
		if(j >= i && j <= 9-(i-1)) str += '*';
		else str += ' ';
	}
	console.log(str);
}


/*
const n = 5;
let tree = '';

for(let i=1; i<=n; i++) {
	let star = '';
	for(let j=1; j<=n-i; j++) { // 5-1
		star += ' ';
	}
	for(let k=1; k<=2*i-1; k++) {
		star += '*';
	}
	tree += star + '\n';
}
console.log(tree);
*/