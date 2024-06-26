export interface Passenger {
  name: string,
  children?: string[]
}

const passenger1: Passenger = {
  name: "David"
}

const passenger2: Passenger = {
  name: "Lulu",
  children: ["pulgas", "liendras"]
}

// const printChildre = (passenger: Passenger):number => {
//   const howManyChildrens = passenger.children?.length || 0;
//   return howManyChildrens
// }

// console.log(printChildre(passenger2));
// console.log(printChildre(passenger1));

const printChildre = (passenger: Passenger):number => {
  const howManyChildrens = passenger.children!.length;
  return howManyChildrens
}

console.log(printChildre(passenger2));

// const printChildre = (passenger: Passenger) => {
//   const howManyChildrens = passenger.children?.length;
//   console.log(passenger.name,howManyChildrens);
// }

// printChildre(passenger2)
// printChildre(passenger1)