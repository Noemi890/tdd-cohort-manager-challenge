const Students = require('./students')
class Cohort {
    constructor(name) {
        this.name = name
        this.students = []
    }

    get() {
        return this
    }

    createAStudent(name, surname, email, github) {
        const student = new Students(name, surname, email, github)
        this.students.push(student)
        return student
    }
}

module.exports = Cohort