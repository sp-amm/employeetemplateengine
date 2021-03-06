// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, office){
        super(id, name, email);
        this.office = office;
    }

    getOfficeNumber(){
        return this.office;
    }

    getRole(){
        return "Manager";
    }

}

module.exports = Manager;