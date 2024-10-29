let employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  nameLength: function () {
    console.log(this.name.length);
  },
  showAlerts: function () {
    for (let key in this) {
      if (typeof this[key] !== "function") {
        console.log(
          `${key.charAt(0).toUpperCase() + key.slice(1)} is ${this[key]}`
        );
        // alert(`${key.charAt(0).toUpperCase() + key.slice(1)} is ${this[key]}`);
      }
    }
  },
  lastName: function () {
    nameArray = this.name.split(" ");
    console.log(nameArray[nameArray.length - 1]);
  },
};

// 1. Add a method called nameLength that prints out the
// length of the employees name to the console.

employee.nameLength();

// 2. Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert: Name is John Smith, Job is Programmer, Age is 31.

employee.showAlerts();

// 3. Add a method called lastName that prints
// out the employee's last name to the console. You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp

employee.lastName();
