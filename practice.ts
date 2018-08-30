let a = 5;
let b = 5;
let c = a + b;

console.log(c);

let myVariable: any = 'This is a string';

let num: number = 5;
let myName: string = 'Eric';
let myBool: boolean = true;

// CLASS
class Car {
  model: string;
  doors: number;
  isElectric: boolean;

  constructor(model: string, doors: number, isElectric: boolean) {
    this.model = model;
    this.doors = doors;
    this.isElectric = isElectric;
  }

  displayMake(): void {
    console.log(`This car is a ${this.model}`)
  }
}

const Prius = new Car('Tesla', 4, true);
Prius.displayMake();

// INTERFACE
interface ICar {
  model: string,
  make: string,
  displaySound(): void
}

const betterCar: ICar = {
  model: 'Roadster',
  make: 'Tesla',
  displaySound: () => { console.log('vroom'); }
};
