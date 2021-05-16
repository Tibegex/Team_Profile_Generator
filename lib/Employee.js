class Employee {
  constructor(name, id, email) {
    if (typeof name !== "string") {
      throw new Error("Expected parameter of 'name' to be a string");
    }
    // if (typeof this.id === NaN) {
    //   throw new Error("Expected parameter of 'id' to be a number");
    // }
    // if (this.email.includes("@", ".") === false) {
    //   throw new Error("Expected parameter of 'email' to contain a @ and '.'");
    // }
    // if (
    //   typeof this.name === undefined ||
    //   typeof this.id === undefined ||
    //   typeof this.email === undefined
    // ) {
    //   throw new Error(
    //     "Expected parameter 'name', 'id', and/or 'email' to be a non empty string"
    //   );
    // }

    this.name = name;
    this.id = id;
    this.email = email;
  }
  employeeName() {
    return this.name;
  }
  employeeId() {
    return this.id;
  }
  employeeEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}
const employee = new Employee(123456, 123456, "Joshua_B_lee@yahoo.com");
employee.employeeName();
employee.employeeId();
employee.employeeEmail();
employee.getRole();

module.exports = Employee;
