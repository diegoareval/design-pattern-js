
class Employes {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

// factory for flyweight objects
class EmployeFactory {
  constructor() {
    this._employes = [];
  }

  createEmploye = (name, salary)  =>{
    let employe = this.getEmployes(name);
    if (employe) {
      return employe;
    } else {
      const employe = new Employes(name, salary);
      this._employes.push(employe);
      return employe;
    }
  }

  getEmployes =(name) =>{
    return this._employes.find(employe => employe.name === name);
  }
}

// usage
const factory = new EmployeFactory();

const dev = factory.createEmploye('Dev', 15);
const tester = factory.createEmploye('Tester', 15);

// reference to the same object
console.log(dev === tester); // true
console.log(dev);