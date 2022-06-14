class Students {
    constructor(name, surname, github, email) {
        this.name = name
        this.surname = surname
        this.github = github
        this.email = email
    }

    get() {
        return this
    }
}

module.exports = Students