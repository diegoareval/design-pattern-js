let currentId = 0;

class ComplaintRegistry {
  registerComplaint(employe, type, details) {
    const id = ComplaintRegistry._uniqueIdGenerator();
    let registry;
    if (type === 'fire') {
      registry = new EnterpriseComplaints();
    } else {
      registry = new EmployeComplaints();
    }
    return registry.addComplaint({ id, employe, details });
  }

  static _uniqueIdGenerator() {
    return ++currentId;
  }
}

class Complaints {
  constructor() {
    this.complaints = [];
  }

  addComplaint(complaint) {
    this.complaints.push(complaint);
    return this.replyMessage(complaint);
  }

  getComplaint(id) {
    return this.complaints.find(complaint => complaint.id === id);
  }

  replyMessage(complaint) { }
}

class EmployeComplaints extends Complaints {
  constructor() {
    super();
    if (EmployeComplaints.exists) {
      return EmployeComplaints.instance;
    }
    EmployeComplaints.instance = this;
    EmployeComplaints.exists = true;
    return this;
  }

  replyMessage({ id, employe, details }) {
    return `Complaint No. ${id} reported by ${employe} the action:  ${details} is not affair.`;
  }
}

class EnterpriseComplaints extends Complaints {
  constructor() {
    super();
    if (EnterpriseComplaints.exists) {
      return EnterpriseComplaints.instance;
    }
    EnterpriseComplaints.instance = this;
    EnterpriseComplaints.exists = true;
    return this;
  }

  replyMessage({ id, employe, details }) {
    return `Complaint No. ${id} reported by ${employe} the enterprise is not getting:  ${details}.`;
  }
}

// usage
const registry = new ComplaintRegistry();

const reportService = registry.registerComplaint('Diego', 'fire', 'the results');
console.log(reportService);
const reportProduct = registry.registerComplaint('Jenny', 'enterprise', 'the fire');
console.log(reportProduct);