/**
숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
-> 주어진 숫자의 반만큼 나눠봐야
*/

// const n = parseInt('1', 10);

// let count = 0;
// for(let i = 2; i <= Math.round(n / 2); i++) {
// 	if(n % i === 0) count++;
// }

// if(count >= 1) {
// 	console.log('NO')
// } else {
// 	console.log('YES');
// }


const n = parseInt('5', 10);

const checkPrime = n => {
	if(n === 1) {
		console.log('NO');
		return false;
	}
	
	for(let i = 2; i < n; i++) {
		if(n % i === 0) {
			console.log('NO');
			return false;
		}
	}

	console.log('YES');
}

checkPrime(10);