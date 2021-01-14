/*
숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
*/

const num = '123456789';

function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    console.log(s.slice(0, s.length - 3), s.slice(s.length - 3));
    return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
  }
}

console.log(comma(num));
