class Employe {
  constructor(name, position, salary) {
    this._name = name;
    this._position = position;
    this.salary = salary;
  }
  getDetails() {
    return `${this._name} work like ${this._position} earning an estimated amount ${this.salary}`;
  }
}

// decorator 1
function giftWrap(employe) {
  employe.isWrapped = true;
  employe.unwrap = function () {
    return `Description:  ${employe.getDetails()}`;
  };
  return employe;
}

// decorator 2
function hardbindEmploye(employe) {
  employe.isHardbound = true;
  employe.salary += 75;
  return employe;
}

// usage
const dev = giftWrap(new Employe('Diego', 'Developer', 300));

console.log(dev.isWrapped); 
console.log(dev.unwrap()); 

const manager = hardbindEmploye(new Employe('Karla', 'Manager', 350));

console.log(manager.isHardbound); // true
console.log(manager.salary); 