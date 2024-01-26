class car{
    // properties
    constructor(name,model,color){
        this.name=name;
        this.model=model;
        this.color=color;
    }
    // method
    speed(){
        console.log("maximumspeed 160")
    };
    autospeed(){
        console.log("maximumspeed 10")
    }

    displaydata(){
       return this.name +
              this.model +
              this.color 
    }
    
    displaydata(){
    console.log(this.name + this.model + this.color)
    }

}
var obj1=new car("meera",21,"white");
var obj2=new car ("auto",16,"gray");
var obj3=new car("civic",23,"black");

// console.log(obj3)
// console.log(obj1.name)
// console.log(obj2.color)
// obj3.speed()

// return method
console.log(obj1.displaydata())

// console method
obj2.displaydata()

// loop
 for (const key in obj1) {
     console.log(key + " : " + obj1[key])
    }
