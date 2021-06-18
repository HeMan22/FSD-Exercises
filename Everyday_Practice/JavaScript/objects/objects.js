let productTwo = {
  name: "mobile",
  brand: "samsung",
  price: 2500,
  getPrice() {
    console.log("This is referring to following object: ", this);
    return this.price;
  },
};

for (let key in productTwo) {
  console.log(`${key} : ${productTwo[key]}`);
}

console.log(productTwo.getPrice());
productTwo.category = "electronics";
//productTwo["category"] = "mobiles";
//productTwo["section"] = "smartphone";
console.log(productTwo);

// Construtor Function      --NEW

function Product(name, brand, price) {
  (this.name = name),
    (this.brand = brand),
    (this.price = price),
    (this.getPrice = function (vat) {
      console.log("gghghgf", this);
      return this.price * (1 + vat / 100);
    });
}

let productThree = new Product("Car", "Mercedes", "50000");

console.log(productThree);
productThree.getPrice();

let priceFunction = productThree.getPrice;
console.log("priceFunction", priceFunction);

console.log("Call : ", priceFunction.call(productThree, 12));

priceFunction = priceFunction.bind(productTwo);

console.log("Bind : ", priceFunction(12));
