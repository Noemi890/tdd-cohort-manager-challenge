
class cohortManager {

    constructor() {
        this.cohorts = []
        this.id = 1
    }

    addCohort(name) {
        this.cohorts.push({[name]: []})
        return this.cohorts
    }

    searchByName(name) {
        // console.log("list of cohorts", this.cohorts)
        const cohortName = this.cohorts.find(cohort => cohort[name])
        // console.log("searched cohort", cohortName)
        return cohortName;
    }

    createAStudent(name, surname, github, email) {
        const newStudent = {
            name: name,
            surname: surname,
            github: github,
            email: email,
            id: this.id
        }
        console.log("my new student", newStudent)
        this.id++
        return newStudent
    }

    addAStudent(name) {
        const cohortName = this.cohorts.find(cohort => cohort[name])
        // console.log("searched cohort", cohortName)
        cohortName[name].push(this.createAStudent("guy1", "guy1", "guy11", "guy1@gmail.com"))
        // console.log("student added to cohort", cohortName)
        return cohortName
    }
}

module.exports = cohortManager