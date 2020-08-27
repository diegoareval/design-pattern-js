// encapsulation
class Commute {
  work(job) {
    return job.workTime();
  }
}

class AnyJob {
  workTime() {
    return this._timeWork;
  }
}

// strategy 1
class Dev extends AnyJob {
  constructor() {
    super();
    this._timeWork = 10;
  }
}

// strategy 2
class Manager extends AnyJob {
  constructor() {
    super();
    this._timeWork = 5;
  }
}

// strategy 3
class Secretary extends AnyJob {
  constructor() {
    super();
    this._timeWork = 3;
  }
}

// strategy 4
class Counter extends AnyJob {
  constructor() {
    super();
    this._timeWork = 1;
  }
}

// strategy 5
class MBA extends AnyJob {
  constructor() {
    super();
    this._timeWork = 2;
  }
}

// usage
const commute = new Commute();

console.log(commute.work(new Dev())); // 5
console.log(commute.work(new Manager())); // 10
console.log(commute.work(new Secretary())); // 3
console.log(commute.work(new Counter()));  //1
console.log(commute.work(new MBA()));  // 2