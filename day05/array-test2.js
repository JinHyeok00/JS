// 1~10까지 Array객체에 담은 후 짝수만 출력
// let numbers = new Array(10).fill(0);
// numbers.forEach((number, i, numbers) => (numbers[i] = i + 1));
// numbers.filter((number) => number % 2 == 0).forEach(console.log);

// 한글을 정수로 변경
// let hangle = '공일이삼사오육칠팔구';
// let target = '일공이사';
// let result = '';
// target
//   .split('')
//   .map((char) => hangle.indexOf(char))
//   .forEach((i) => (result += i));
// console.log(result);

// 정수를 한글로 변경
// let hangle = '공일이삼사오육칠팔구';
// let number = '1024';
// Array.from(number)
//   .map((i) => hangle[i])
//   .forEach((char) => (result += char));
// console.log(result);

// 1~100까지 합 출력
let numbers = new Array(100).fill(0);
numbers = numbers.map((number, i) => i + 1);
let result = numbers.reduce((v, number) => v + number);
console.log(result);
