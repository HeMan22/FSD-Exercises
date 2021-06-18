class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `name : ${this.name} , price : ${this.price}`;
  }
}

let product1 = new Product("Snacks", 50);
console.log(product1.getDetails());

class ElectronicProduct extends Product {
  constructor(name, price, voltage) {
    super(name, price);
    this.voltage = voltage;
  }
}

let product2 = new ElectronicProduct("Two", 200);
console.log(product2.getDetails());
