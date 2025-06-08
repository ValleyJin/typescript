console.log('typescript 테스트') 

interface Toy {
    name: string;
}

interface Car {
    color: string; 
    wheel: number;
    start() : void;
}

interface ToyCar extends Toy, Car{
    price: number;
}

interface Benz extends Car {
    door : number;
    stop() : void;
}

class BMW implements Car{
    wheel = 4;
    door = 4
    color;
    constructor(c:string) {
        this.color = c;
    }
    
    start(){
        console.log('BMW go...')
    }
    
    stop (){
        console.log('BMW stop...')
    }
}
 
class Benz implements Benz{
    color;
    wheel = 4;
    door = 4;
    constructor(c:string){
        this.color = c;
    }

    start(){
        console.log('Benz starts...')
    }

    stop(){
        console.log('Benz stops...')
    }
}

class AcademyCar implements ToyCar{
       name = '부릉이'
       wheel = 4
       price = 1000
       color;
       constructor(c:string){
        this.color = c;
       }
       start() {
        console.log(this.name + ' 출발합니다')
       }
}

interface ToyCar extends Toy, Car{
    price: number;
}
const myCar = new BMW('green')
const myCar2 = new Benz('white')
const myCar3 = new AcademyCar('black')
myCar.start()
myCar2.stop()
myCar3.start()
