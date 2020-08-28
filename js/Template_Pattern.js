class Employee {
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }
  work =() => {
    return `${this._name} handles ${this.responsibilities() /* gap to be filled by subclass */}`;
  }

  getPaid = () =>{
    return `${this._name} got paid ${this._salary}`;
  }

  getBoss = () =>{
    return `${this._name} with the boss name is Lic ${this.boss()}`;
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  responsibilities = () =>{
    return 'application development';
  }

  boss = () =>{
    return 'David Ortiz';
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  responsibilities = () => {
    return 'testing';
  }

  boss = () => {
    return 'Jonathan Landaverde';
  }
}

class Manager extends Employee {
  constructor(name, salary) {
    super(name, salary);
  }

  // details handled by subclass
  responsibilities =() => {
    return 'manage the enterprise';
  }

  boss = () => {
    return 'Cecy Mancia';
  }
}

// usage
const dev = new Developer('Diego', 10000);
console.log(dev.getPaid()); 
console.log(dev.work()); 
console.log(dev.getBoss())

const tester = new Tester('Cristhian', 9000);
console.log(tester.getPaid()); 
console.log(tester.work());
console.log(tester.getBoss())

const manager = new Manager('Roxana', 6000);
console.log(manager.getPaid());
console.log(manager.work());
console.log(manager.getBoss())

