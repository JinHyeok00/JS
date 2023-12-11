// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경한다.

function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}

let product1 = new Product('새우깡', 2000, 50);
let product2 = new Product('감자깡', 1900, 30);
let product3 = new Product('고구마깡', 2200, 25);

let store = new Array(product1, product2, product3);
let storeJSON = JSON.stringify(store);
console.log(storeJSON);
