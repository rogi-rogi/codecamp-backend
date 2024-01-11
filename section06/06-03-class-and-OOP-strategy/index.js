/*
상황에 따른 상속과 전략패턴의 적용이 필요함.
원본으로부터 파생되는 경우 상속을,
새로 만드는 클래스가 여러 클래스를 포함하고 싶은경우에는 전략패턴을 사용하자. 
*/

class 공중부품 {
  run = () => {
    console.log("날라서 도망가자!!");
  };
}

class 지상부품 {
  run = () => {
    console.log("뛰어서 도망가자!!");
  };
}

class Monster {
  power = 10;
  qqq;

  constructor(부품) {
    this.qqq = 부품;
  }

  attack = () => {
    console.log("공격하자!!");
    console.log("내 공격력은 " + this.power + "야!!!");
  };

  run = () => {
    this.qqq.run();
  };
}

const mymonster1 = new Monster(new 공중부품());
mymonster1.attack();
mymonster1.run();

const mymonster2 = new Monster(new 지상부품());
mymonster2.attack();
mymonster2.run();
