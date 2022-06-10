const { ExternalCampaignInstance } = require('twilio/lib/rest/messaging/v1/externalCampaign')
const cohortManager = require('../src/cohort_manager')

describe("cohortManager", () => {
    let cohort_manager

  beforeEach(() => {
    cohort_manager = new cohortManager()
  })

  it("add a new Cohort", () => {
      const expected = [{cohortSix: {}}]
        const result = cohort_manager.addCohort("cohortSix")
        expect(result).toEqual(expected)
    }
  )

  it("search cohort by name", () => {
    cohort_manager.addCohort("cohortSix")
    cohort_manager.addCohort("cohortEight")
    cohort_manager.addCohort("cohortFive")
    const expected = {cohortSix: {}}
    const result = cohort_manager.searchByName("cohortSix")
    expect(result).toEqual(expected)
  })
})



        //   cohortSix: {
        //       students: 24,
        //       Profiles: [
        //           {
        //             ID: 1,
        //             name: "Guy1",
        //             surname: "Guy1",
        //             gitHub: "Guy11",
        //             email: "guy1@gmail.com"
        //           },
        //           {
        //             ID: 1,
        //             name: "Guy2",
        //             surname: "Guy2",
        //             gitHub: "Guy22",
        //             email: "guy2@gmail.com"
        //           },
        //           {
        //             ID: 1,
        //             name: "Guy3",
        //             surname: "Guy3",
        //             gitHub: "Guy33",
        //             email: "guy3@gmail.com"
        //           }
        //         ]
        //     }