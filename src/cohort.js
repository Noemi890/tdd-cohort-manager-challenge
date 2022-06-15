const Students = require('./students')
class Cohort {
    constructor(name) {
        this.name = name
        this.students = []
        this.capacity = 2
    }

    get() {
        return this
    }

    createAStudent(name, surname, email, github) {
        if(this.checkCapacity()) {
        const student = new Students(name, surname, email, github)
        this.students.push(student)
        console.log(this.students)
        return student
        }
        return 'Max Students reached'
    }

    checkCapacity() {
        if (this.students.length < this.capacity) {
            return true
        }
        return false
    }
}

module.exports = Cohort