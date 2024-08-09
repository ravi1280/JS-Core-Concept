const array = [1, 2, 3];
const obj = { one: 10, two: 20, three: 30 };

function sum(a, b, c) {
  console.log(a + b + c);
}

sum(...array);

// We can't use Spread Operator for object like this =>
sum(...obj);

// But we can =>
sum(...Object.values(obj));
