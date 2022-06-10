
class cohortManager {

    constructor() {
        this.cohorts = []
        this.id = 0
    }

    addCohort(name) {
        this.cohorts.push({[name]: {}})
        return this.cohorts
    }
}

module.exports = cohortManager