 class User{
    constructor(name,age,height){

        console.log(` create User Class ${name},${age},${height} `)
        this.UName =name;
        this.UAge = age;
        this.UHeight = height;
    }
     getBMT(){
       const BMI = this.UAge*this.UHeight;
        return (`user BMI is ${BMI} .`)
     }
 }
const newUser = new User("UserName",20,170);
console.log(newUser.getBMT());