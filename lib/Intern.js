const Employee = requirer("./Employee");

class Intern extends Employee {
    constructor(name, id, email, scholl) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}
 module.exports = Intern