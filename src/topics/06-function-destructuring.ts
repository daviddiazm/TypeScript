
export interface Product {
  description: string,
  price: number
}


// const phone: Product = {
//   description: "Nokia",
//   price: 150.0
// }
// const table: Product = {
//   description: "iPadAir",
//   price: 250.0
// }

interface TaxCalculationOption {
  tax: number,
  products: Product[]
}

function taxCalculation (options: TaxCalculationOption):[number, number] {
  const {products, tax} = options
  let total = 0;
  products.forEach((product) => {
    total += product.price;
  })
  return [total, total * tax]
}



// const shoppingCard: Product[] = [phone, table];
// const tax: number = 0.15;

// const options: TaxCalculationOption= {
//   products: shoppingCard,
//   tax
// }
// const [total, taxResult]= taxCalculation(options)

// console.log(`Total = ${result[0]}`);
// console.log(`tax = ${result[1]}`);


// console.log(total);
// console.log(taxResult);

export {
  taxCalculation
}