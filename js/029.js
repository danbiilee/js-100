/*
*
알파벳 하나만을 입력하고 
그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.
*/

const alphabet = 'P';

console.log(/[A-Z]/.test(alphabet) ? 'YES' : 'NO');