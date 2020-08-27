// encapsulation
class Commute {
  travel(transport) {
    return transport.travelTime();
  }
}

class AnyTransport {
  travelTime() {
    return this._timeTaken;
  }
}

// strategy 1
class Bus extends AnyTransport {
  constructor() {
    super();
    this._timeTaken = 10;
  }
}

// strategy 2
class Taxi extends AnyTransport {
  constructor() {
    super();
    this._timeTaken = 5;
  }
}

// strategy 3
class PersonalCar extends AnyTransport {
  constructor() {
    super();
    this._timeTaken = 3;
  }
}

// strategy 4
class AirPlane extends AnyTransport {
  constructor() {
    super();
    this._timeTaken = 1;
  }
}

// strategy 5
class Bike extends AnyTransport {
  constructor() {
    super();
    this._timeTaken = 2;
  }
}

// usage
const commute = new Commute();

console.log(commute.travel(new Taxi())); // 5
console.log(commute.travel(new Bus())); // 10
console.log(commute.travel(new PersonalCar())); // 3
console.log(commute.travel(new AirPlane()));  //1
console.log(commute.travel(new Bike()));  // 2