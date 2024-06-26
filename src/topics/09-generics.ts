function whathsMyTyper<T>(argument:T): T {
  return argument;
}

// let amIString = whathsMyTyper("hola mundo");
let amIString = whathsMyTyper<string>("123");
// let amIString = whathsMyTyper<string>(123);
let amINumbe = whathsMyTyper<number>(123);
let amIArray = whathsMyTyper<number[]>([1,2,3]);


console.log(amIString.split(" "));
console.log(amINumbe.toString());
console.log(amIArray.length);
