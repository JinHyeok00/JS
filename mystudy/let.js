let data = 25;

test();

console.log(`testoutdata:${data}`);

function test() {
  data = 15;
  console.log(`testindata:${data}`);
}

for (var i = 0; i < 10; i++) {}

console.log(i);
