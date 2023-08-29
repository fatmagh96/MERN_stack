
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
        console.log(`name : ${this.name}
            health : ${this.health} 
            speed : ${this.speed}
            strength: ${this.strength}
            `);    
        return this;
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}




const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.showStats();
