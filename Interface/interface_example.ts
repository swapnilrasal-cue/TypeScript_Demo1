interface User{
    name :string;
    age : number;
    Address? : string;
}

let user:User;

user = { name:"swapnil", age:24};
console.log(user);

interface CanDrive{
    accelerate(speed : number):void;
}

let car1 :CanDrive ={
accelerate:function(speed:number){
    // ...
}
};

console.log(car1);
