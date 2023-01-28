
// oop approch in ES5 

function Animal5(color,weight){
    this.color =color;
    this.weight =weight;
    this.walk = ()=>{console.log("wlak")}
    this.run = ()=>{console.log("run")}
    this.eat = ()=>{console.log("eat")}
    this.attack = ()=>{console.log("attack")}
}

function Bird5(color,weight){
    Animal.call(this,color,weight);
    this.flying =()=>{console.log("flying")};
}
Bird5.prototype.__proto__ = Animal5.prototype;
var asfora = new Bird5("red",75);

////////////////////////////////////////////////////////////////
// oop approch in ES6

class Animal6 {
    static count = 0;
    constructor(color,weight){
        try{
            if(Animal6.count == 100){
                this.__proto__ = null;
                delete this;
                throw "max number of animals equal 100.";
            }
            this.color=color;
            this.weight = weight;
            Animal6.count++;
        }catch(e){
            console.error(e);
        }
    }
    walk(){
        console.log("wlak");
    }
    run(){
        console.log("run");
    }
    eat(){
        console.log("eat");
    }
    attack(){
        console.log("attack");
    }
}

class Bird6 extends Animal6 {
    constructor(color,weight){
        super(color,weight);
    }
    flying(){
        console.log("flying"); 
    }
}
// to check the max number of animals -> by static count property in class Animal 
let ymama=[]
for (let i = 0; i < 102; i++) {
    ymama[i] = new Bird6("red",75)
}

// isBird() function

function isBird(animal){
    return (animal instanceof Bird6);
}

