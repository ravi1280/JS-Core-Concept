this.name = "JavaScript";
console.log(this.name);
//this meaning => currently running Object

const obj1 = {
  name: "Text",
  normalFuncton: function () {
    console.log(this.name);
  },
  arrowFunction: ()=> {
    console.log(this.name);
  },
}
obj1.normalFuncton();
obj1.arrowFunction();
obj1.name;