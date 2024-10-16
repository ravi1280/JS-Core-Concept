class User{
    constructor(name){
       this.Uname = name;
    }
    set setName(setname){
        this.Uname = setname;
       }
   get getName (){
       return this.Uname;
   }
   
}
 
const newUser = new User("UserName001");

// userName  work like variable 
console.log(newUser.getName);
newUser.setName="Ravishka";
console.log(newUser.getName);