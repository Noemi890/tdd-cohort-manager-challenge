
class cohortManager {

    constructor() {
        this.cohorts = []
        this.id = 0
    }

    addCohort(name) {
        this.cohorts.push({[name]: {}})
        return this.cohorts
    }

    searchByName(name) {
        // console.log("list of cohorts", this.cohorts)
        const cohortName = this.cohorts.find(cohort => { return cohort[name]})
        // console.log("searched cohort", cohortName)
        return cohortName;
    }
}

module.exports = cohortManager