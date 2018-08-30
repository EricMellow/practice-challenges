let a = 5;
let b = 5;
let c = a + b;

console.log(c);

let myVariable: any = 'This is a string';

let num: number = 5;
let myName: string = 'Eric';
let myBool: boolean = true;


class Car {
  model: String;
  doors: Number;
  isElectric: Boolean;

  constructor(model: String, doors: Number, isElectric: Boolean) {
    this.model = model;
    this.doors = doors;
    this.isElectric = isElectric;
  }

  displayMake(): void {
    console.log(`This car is a ${this.model}`)
  }
}