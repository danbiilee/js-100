/*
괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다.
(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
(해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 
"YES"와 "NO"로 구분된 문자열을 출력해보자.
*/

const data = '[({}([))]';

function match(data) {
  // 괄호 개수로 판단
  let small = 0;
  let middle = 0;
  let large = 0;
  for (const i in data) {
    if (data[i] === '(') {
      small++;
    } else if (data[i] === ')') {
      small--;
    }
    if (data[i] === '{') {
      middle++;
    } else if (data[i] === '}') {
      middle--;
    }
    if (data[i] === '[') {
      large++;
    } else if (data[i] === ']') {
      large--;
    }
  }
  if (small > 0 || middle > 0 || large > 0) {
    return false;
  }

  // 짝 판단
  let smallArr = [];
  let middleArr = [];
  let largeArr = [];
  for (const i in data) {
    if (data[i] === '(') {
      smallArr.push(data[i]);
    } else if (data[i] === ')') {
      if (!smallArr.length) {
        return false;
      } else {
        smallArr.pop();
      }
    }
    if (data[i] === '{') {
      middleArr.push(data[i]);
    } else if (data[i] === '}') {
      if (!middleArr.length) {
        return false;
      } else {
        middleArr.pop();
      }
    }
    if (data[i] === '[') {
      largeArr.push(data[i]);
    } else if (data[i] === ']') {
      if (!largeArr.length) {
        return false;
      } else {
        largeArr.pop();
      }
    }
  }
  return true;
}

if (match(data)) {
  console.log('YES');
} else {
  console.log('NO');
}
