const array01 =[1,2,3];
const array02=[...array01];
array01[0]=100;
console.log(array01,array02);


const obj1={one:1,two:2,three:3}
const obj2={...obj1};
obj1["one"]=100;
console.log(obj1,obj2);