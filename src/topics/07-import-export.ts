import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCard: Product[] = [
  {
    description: "nokia",
    price: 100
  },
  {
    description: "iPad",
    price: 150
  },
];

const tax = 0.15

const [total, taxResult] = taxCalculation({
  products: shoppingCard,
  tax
})

console.log(total);
console.log(taxResult);
