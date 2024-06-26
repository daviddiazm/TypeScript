

// function addNumber (a: number, b: number) {
//   return a+b;
// }

// const addNumbersArrow = (a: number, b: number):string => {
//   return `${a + b}`;
// }

// const multiply = (firstNumber: number, secondNumer?: number, base: number = 2) => {
//   return firstNumber * base;
// }



// const arrow: string = addNumbersArrow(3,5);
// const multiplyResult: number = multiply(5);
// const result: string = addNumber(2,5).toString();

// console.log({result, arrow, multiplyResult });



interface Character {
  name: string,
  hp: number,
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) =>{
  character.hp += amount;
}

const strider: Character = {
  name: "david",
  hp: 100,
  showHp(){
    console.log(`Puntos de vida ${this.hp}`);
  }
}

strider.showHp();

healCharacter(strider, 10);

strider.showHp();


export{};