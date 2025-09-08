class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get profession() {
    return this._profession;
  }
  get salary() {
    return this.#salary;
  }

  set firstName(value) {
    this._firstName = value;
  }
  set lastName(value) {
    this._lastName = value;
  }
  set profession(value) {
    this._profession = value;
  }
  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
      throw new Error('Invalid salary');
    }
    this.#salary = value;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;

  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }

  set title(value) {
    this._title = value;
  }
  set phone(value) {
    this._phone = value;
  }
  set address(value) {
    this._address = value;
  }
  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Only Employee instances can be added');
    }
  }
  getEmployees() {
    return this.#employees;
  }
  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };