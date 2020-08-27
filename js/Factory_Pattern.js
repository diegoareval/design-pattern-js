class EmployeFactory {
  constructor() {
    this.createEmploye =  (type) => {
      let employe;
      switch (type) {
        case 'developer':
          employe = new Developer();
          break;
         case 'admin': 
          employe = new Admin();
         break;
        default: 
          employe = new Developer();
          break;
      }

      employe.action = function () {
        return `The ${this._type} is working.`;
      };

      return employe;
    };
  }
}

class Developer {
  constructor() {
    this._type = 'developer';
    this.develop = function () {
      return 'You developed all day';
    };
  }
}

class Admin {
  constructor() {
    this._type = 'admin';
    this.manage = function () {
      return 'You created reports all day.';
    };
  }
}

// creating objects
const factory = new EmployeFactory();

const developer = factory.createEmploye('developer');
const admin = factory.createEmploye('admin');

console.log(developer.action()); 
console.log(admin.action()); 
console.log(developer.develop()); 
console.log(admin.manage()); 