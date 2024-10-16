/*first Step start*/

function add(a, b, c) {
  return arguments;
}
console.log(add(10, 20, 30));

/*first Step end*/

/*second Step*/
const add2 = (a, b, c) => {
  //arrow function can't return arguments//
  return arguments;
};
console.log(add2(10, 20, 30));
/*second Step*/
