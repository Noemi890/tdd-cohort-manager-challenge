const Cohort = require('./cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  addCohort(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === name) {
        return 'Cohort already existing'
      }
    }
    if(name === undefined) {
      return 'Cohort name not valid'
    }
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  getByName(name) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === name) {
        return this.cohorts[i]
      }
    }
    return 'Invalid Cohort'
  }

  addStudent(cohort, name, surname, email, github) {
        const myCohort = this.getByName(cohort)
        const student = myCohort.createAStudent(name, surname, email, github)
        if(student === 'Max Students reached') {
          return student
        }
        return myCohort
  }

  removeCohort(cohort) {
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i].name === cohort) {
        this.cohorts.splice(i, 1)
        return this.cohorts
      }
    }
  }

  removeStudent(name, cohort) {
    const myCohort = this.getByName(cohort)
    for (let i = 0; i < myCohort.students.length; i++) {
      if (myCohort.students[i].name === name) {
        myCohort.students.splice(i, 1)
        return myCohort
      }
    }
    return 'Invalid Student'
  }
}

module.exports = CohortManager