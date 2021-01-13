/**
 [ ❓ ] 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

```js
데이터
nationWidth = {
     'korea': 220877,
     'Rusia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}
 */

const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

function computeDiff() {
  const keys = Object.keys(nationWidth).slice(1);
  const pivot = nationWidth.korea;
  let temp = {
    diff: 0,
    nation: '',
  };

  for (let i = 0; i < keys.length; i++) {
    const diff = nationWidth[keys[i]] - pivot;
    if (!temp.diff || diff < temp.diff) {
      temp.diff = diff;
      temp.nation = keys[i];
    }
  }

  return `${temp.nation}, ${temp.diff}`;
}

//console.log(computeDiff());

function answer() {
  const nations = { ...nationWidth };
  const pivot = nations.korea;
  delete nations.korea;

  const entries = Object.entries(nations);
  const values = Object.values(nations);

  let gap = Math.max.apply(null, values);
  let minNation;
  for (const item of entries) {
    const diff = Math.abs(item[1] - pivot);
    if (diff < gap) {
      gap = diff;
      minNation = item[0];
    }
  }
  console.log(minNation, gap);
}

answer();
