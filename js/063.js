/*
입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력
입력
복잡한 세상 편하게 살자

출력
복세편살
*/

const words = '복잡한 세상 편하게 살자'.split(' ');
let result = '';

for (const s of words) {
  result += s[0];
}

console.log(result);
