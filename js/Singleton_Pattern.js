class Employe {
  constructor(data) {
    if (Employe.exists) {
      return Employe.instance;
    }
    this._data = data;
    Employe.instance = this;
    Employe.exists = true;
    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// usage
const admin = new Employe('admin');
console.log(admin.getData()); // admin

const developer = new Employe('developer');
console.log(admin.getData()); // admin, it means only one instance of class can exist