
class Ninja {
    constructor(name,health,speed=3,strength=3){
        this.name = name
        this.health = health || 0
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(`This ninja's name is ${this.name}`);
        return this;
    }
    showStats(){
        // console.log(`name : ${this.name}
        //     health : ${this.health} 
        //     speed : ${this.speed}
        //     strength: ${this.strength}
        //     `);    
        console.log(this);
        return this;
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name,200,10,10);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
