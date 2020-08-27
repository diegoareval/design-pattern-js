// old interface
class OldCalculator {
  constructor() {
    this.operations = function(term1, term2, operation) {
      switch (operation) {
        case 'add':
          return term1 + term2;
        case 'sub':
          return term1 - term2;
          case 'mult':
            return term1 * term2;
        case 'div':
          return term1 / term2;
        case 'mod':
          return term1 % term2;
        default:
          return NaN;
      }
    };
  }
}

// new interface
class NewCalculator {
  constructor() {
    this.add = function(term1, term2) {
      return term1 + term2;
    };
    this.sub = function(term1, term2) {
      return term1 - term2;
    };
    this.mult = function (term1, term2) {
      return term1 * term2;
    };

    this.div = function (term1, term2) {
      return term1 / term2;
    };

    this.mod = function (term1, term2) {
      return term1 % term2;
    };
    
  }
}

// Adapter Class
class CalcAdapter {
  constructor() {
    const newCalc = new NewCalculator();

    this.operations = function(term1, term2, operation) {
      switch (operation) {
        case 'add':
          // using the new implementation under the hood
          return newCalc.add(term1, term2);
        case 'sub':
          return newCalc.sub(term1, term2);
        case 'mult':
          return newCalc.mult(term1, term2);
        case 'div':
          return newCalc.div(term1, term2);
        case 'mod':
          return newCalc.mod(term1, term2);
        default:
          return NaN;
      }
    };
  }
}

// usage
const oldCalc = new OldCalculator();
console.log(oldCalc.operations(10, 5, 'div')); // 2

const newCalc = new NewCalculator();
console.log(newCalc.div(10, 5)); // 2

const adaptedCalc = new CalcAdapter();
console.log(adaptedCalc.operations(10, 5, 'div')); // 2