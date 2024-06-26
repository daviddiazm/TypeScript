export class Person {
  // public name: string;
  // private address: string;

  // constructor(name: string, address: string) {
  //   this.name = name;
  //   this.address = address
  // }

  constructor(
    public firtsNmae: string,
    public lastNmae: string,
    // private address: string
    private address: string = "no address"
  ){}
}

// export class Hero extends Persona {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ){
//     super( realName, "nueva York");
//   }
// }

// export class Hero{
//   public person: Person
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ){
//     this.person = new Person(realName)
//   }
// }

export class Hero{
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ){}
}

const tony = new Person("tony", "strak" ,'popayan');
const ironman = new Hero("ironman", 45, "Tony", tony);

console.log(ironman);
