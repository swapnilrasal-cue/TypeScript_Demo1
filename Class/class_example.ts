class Car{
  
  static CC : string ="1800cc";
  static carname : string ="THAR";
  private speed : number;
    constructor(speed : number){
      this.speed=speed;
    }
    
    getSpeed():void{
     console.log("Speed of Car is :"+this.speed);
    }
    Accelerate():void{
      let accelerate = 10;
      let newSpeed=this.speed+accelerate;
      accelerate++;
      console.log("Accelerate Speed of Car by 10 :"+newSpeed);
    }
    break():void{
      let breaks = 10; 
      let newSpeed2=this.speed - breaks;
      breaks--;
      console.log("Brake Applied:"+newSpeed2);
    }

    static numberOfwheels(): void{
      console.log("------------------------------------");
      console.log("-----------CAR ENGINE CC------------");
      console.log("--------------CAR NAME--------------");
      console.log("------------------------------------");
    }
  }

let car = new Car(100);
console.log(car.getSpeed());
console.log(car.Accelerate());
console.log(car.break());
console.log(Car.numberOfwheels());