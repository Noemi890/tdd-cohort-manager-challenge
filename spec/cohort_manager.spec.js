const CohortManager = require('../src/cohort_manager')
const Cohort = require('../src/cohort')
const Students = require('../src/students')

describe("cohortManager", () => {
    let cohort_manager

  beforeEach(() => {
    cohort_manager = new CohortManager()
  })

  it("add a new Cohort", () => {
        const expected = { name: "cohortSix", students: [] }
        const result = cohort_manager.addCohort("cohortSix")
        expect(result.name).toEqual(expected.name)
        expect(result.students).toEqual(expected.students)
    })

  it("get cohort by name", () => {
    cohort_manager.addCohort("cohortSix")
    cohort_manager.addCohort("cohortEight")
    cohort_manager.addCohort("cohortFive")
    const expected = {name: 'cohortSix', students: []}
    const result = cohort_manager.getByName('cohortSix')
    expect(result.name).toEqual(expected.name)
    expect(result.students).toEqual(expected.students)
  })

  it("gets an error if cohort is not found", () => {
    cohort_manager.addCohort("cohortSix")
    cohort_manager.addCohort("cohortEight")
    cohort_manager.addCohort("cohortFive")
    const expected = 'Invalid Cohort'
    const result = cohort_manager.getByName('cohortTen')
    expect(result).toEqual(expected)
  })

it('add a student to cohort', () => {
    cohort_manager.addCohort("cohortSix")
    cohort_manager.addCohort("cohortEight")
    cohort_manager.addCohort("cohortFive")
    const expected = {
        name: 'cohortSix',
        students: [
            new Students('guy1', 'guy1', 'guy1@gmail.com', 'guy11')
        ]
    }
    const result = cohort_manager.addStudent('cohortSix', 'guy1', 'guy1', 'guy1@gmail.com', 'guy11')
    // expect(result.name).toEqual(expected.name)
    expect(result.name).toEqual(expected.name)
    expect(result.students).toEqual(expected.students)
})

  it('remove a cohort', () => {
    cohort_manager.addCohort("cohortSix")
    cohort_manager.addCohort("cohortEight")
    cohort_manager.addCohort("cohortFive")
    const expected = [
        new Cohort('cohortEight'),
        new Cohort('cohortFive')
    ]
    const result = cohort_manager.removeCohort('cohortSix')
    expect(result).toEqual(expected)
  })

  it('remove a student from cohort', () => {
    const myCohort = cohort_manager.addCohort("cohortSix")
    cohort_manager.addStudent('cohortSix', 'guy1', 'guy1', 'guy1@gmail.com', 'guy11')
    cohort_manager.addStudent('cohortSix', 'guy2', 'guy2', 'guy2@gmail.com', 'guy22')
    console.log('Initial Cohort =>', myCohort)
    const expected = {
        name: 'cohortSix',
        students: [
            new Students('guy1', 'guy1', 'guy1@gmail.com', 'guy11')
        ]
    }
    const result = cohort_manager.removeStudent('guy2', 'cohortSix')
    expect(result.name).toEqual(expected.name)
    expect(result.students).toEqual(expected.students)
    })
  })