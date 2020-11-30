/*
  행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램 만들기
*/
const planets = {
  수성: 'Mercury',
  금성: 'Venus',
  지구: 'Earth',
  화성: 'Mars',
  목성: 'Jupiter',
  토성: 'Saturn',
  천왕성: 'Uranus',
  해왕성: 'Neptune',
};

const getPlanetEngNm = () => {
  const korNm = prompt('행성의 한글 이름을 입력하세요');
  return planets[korNm];
};

console.log(getPlanetEngNm());
