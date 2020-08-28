class CumulativeOperation {
  constructor(intialValue = 1) {
    this.sum = intialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }

  remove = (value) =>{
    this.sum -= value;
    return this;
  }

  multiply = (value) =>{
    this.sum *= value;
    return this
  }

  mod = (value) =>{
    this.sum %= value;
    return this
  }

  div = (value) =>{
    this.sum /= value;
    return this
  }

}

// usage
const sum1 = new CumulativeOperation();
console.log(sum1.add(10).add(2).add(50).sum); 


const sum2 = new CumulativeOperation(10);
console.log(sum2.add(10).add(20).add(5).sum); 

const rest = new CumulativeOperation(50);
console.log(rest.add(10).remove(20).sum);

const mult = new CumulativeOperation(5);
console.log(rest.add(10).multiply(20).sum);

const mod = new CumulativeOperation(5);
console.log(mod.add(10).mod(2).sum);

const div = new CumulativeOperation(5);
console.log(div.add(10).div(5).sum);
