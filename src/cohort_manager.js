
class cohortManager {

    constructor() {
        this.cohorts = {}
        this.id = 0
    }

    addCohort(name) {
        this.cohorts[name] = {}
        return this.cohorts
    }
}

module.exports = cohortManager