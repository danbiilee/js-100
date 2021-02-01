/*
골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 
2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 
이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

예)
100 == 47 + 53
56 == 19 + 37

**2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드**를 작성하세요. 

* 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 
그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.
*/

// for (let i = 2; i < n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       bool = false;
//     }
//   }

//   if (bool) {
//     primes.push(i);
//   }
//   bool = true;
// }
// console.log(primes);

//에라토스테네스의 체
function getPrimes(n) {
  // 전부 true로 초기화
  let sieve = []; // 체
  for (let i = 2; i < n; i++) {
    sieve.push(true);
  }

  let m = parseInt(n ** 0.5, 10);
  //console.log(m);
  for (let i = 2; i < m + 1; i++) {
    if (sieve[i] === true) {
      // i 이후, i의 배수들을 지워나감
      for (let j = i + i; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }
  //console.log(sieve);

  let primes = [];
  for (let i = 2; i < n; i++) {
    if (sieve[i] === true) {
      primes.push(i);
    }
  }
  return primes;
}

const n = 100;
const primes = getPrimes(n);
let partition = [];

for (let prime of primes) {
  if (primes.includes(n - prime) && prime <= n - prime) {
    partition.push([prime, n - prime]);
  }
}
//console.log(partition);

let diffs = partition.map(p => p[1] - p[0]);
console.log(diffs);
console.log(Math.min.apply(null, diffs));

let indexMin = diffs.indexOf(Math.min.apply(null, diffs));
let indexMax = diffs.indexOf(Math.max.apply(null, diffs));
console.log(partition[indexMin]);
console.log(partition[indexMax]);
