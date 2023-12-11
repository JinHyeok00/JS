function call() {
  const num20 = 2;
  const num21 = 3;
  console.log(num20 + num21);
}

// call();

const minus = function () {
  const num22 = 2;
  const num23 = 3;
  console.log(num23 - num22);
};

// minus();
const pl = (num22, num23) => {
  const result = num22 + num23;
  return result;
};

const total = pl(3, 5);
console.log(total);

const abc = (file) => console.log(file);
abc('hello');
