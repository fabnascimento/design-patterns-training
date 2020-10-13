import Car from './class-pattern';

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        this.wheels = 4;
    }
}

const ix35 = new SUV(4, 'V16', 'grey');

console.log(ix35);