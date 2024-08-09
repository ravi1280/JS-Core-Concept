const array01 =[1,2,3,4,5,6];
// let a = array01[0];
// let b = array01[1];
// console.log(a,b);

const [first,second,...rest_argument]=array01;
console.log(first);
console.log(second);
console.log(rest_argument);

const obj01 ={one:10,two:20,three:30,four:40}

const {one:x,two,three,...obj_argument}=obj01;
console.log(x);
console.log(two);
console.log(obj_argument);
