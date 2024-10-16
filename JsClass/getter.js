 class User{
     constructor(name){
        this.Uname = name;
     }
    get userName (){
        return this.Uname;
    }
 }
  
 const newUser = new User("UserName001");
 
 // userName  work like variable 
 console.log(newUser.userName);