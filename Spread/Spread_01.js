const array01 = [1, 2, 3];
const array02 = ["x", "y", "z"];
console.log(array01);
console.log(array02);

console.log(array01, array02);


function sum(a, b, c) {
  console.log(a + b + c);
}
sum(array01[0], array01[1], array01[2]);

//use the spread operator (...arrayName)
sum(...array01);