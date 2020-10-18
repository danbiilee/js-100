// 여기에 class를 작성하세요.
class Wizard {
	health;
	mana; 
	armor;

	constructor(health, mana, armor) {
		this.health = health;
		this.mana = mana;
		this.armor = armor;
	}

	attack = () => console.log('파이어볼');
}
// 데이터
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

/*
출력
545 210 10
파이어볼
*/
