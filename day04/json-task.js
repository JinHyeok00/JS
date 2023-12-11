let productJSON = '{"name":"새우깡", "price":"2000"}';

let product = JSON.parse(productJSON);
console.log(product);
productJSON = JSON.stringify(product);
console.log(productJSON);
