function classDecorator (
  constructor: any
) {
  return class extends constructor {
    newProperty = "new properti";
    hello= "override";
  }
}

@classDecorator
export class SuperClass {
  public myProperty: string = "123abc"

  pirnt() {
    console.log("hola mundo");
    
  }
}

console.log(SuperClass);
const myClass = new SuperClass;
console.log(myClass);
