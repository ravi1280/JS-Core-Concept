//Spread operator apply for array
const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
const array03 = [...array01, ...array02];
console.log(array03);

// Spread Operator apply for Object
const obj1 = { first: 1, second: 2 };
const obj2 = { third: 3, fourth: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);
