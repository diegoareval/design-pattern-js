
class Hero {
  constructor(name, specialAbility, skill) {
    // setting property values
    this._name = name;
    this._specialAbility = specialAbility;
    this._skill = skill

    // declaring a method on the object
    this.getDetails =  () => {
      return `${this._name} can ${this._specialAbility}`;
    };

    this.getSkills = ()=>{
      return `${this._name} is ${this._skill}`;
    }

  }
}

// creating new instances of Hero
const Hulk = new Hero('Hulk', 'Jump', "Strong");

// console.log(Hulk.getDetails());
console.log(Hulk.getSkills());