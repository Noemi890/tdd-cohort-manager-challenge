```
As a Cohort-Manager, so that I can manage them, I want to add a cohort.
```
| Method | Scenario | Output|
| ------ | ------ | ------ 
| addCohort(name(@string)) | | return the list with the cohort added |
```
As a Cohort-Manager, so that I can view a specific cohort, I want to search by a specific name.
```
| Method | Scenario | Output|
| ------ | ------ | ------ 
| getByName(name(@string)) | cohort found | return the cohort searched |
| | cohort not found | Invalid Cohort |
```
As a Cohort-Manager, so that I can manage my cohorts, I want to add a student to a specific cohort.
```
| Method | Scenario | Output|
| ------ | ------ | ------ 
| createAStudent(name, surname, github, email (@string)) | | return the added student |
| addStudentToCohort(cohort(@string)) | | return the cohort with the student added |
```
As a Cohort-Manager, so that I can manage my cohorts, I want to remove a Cohort by its name.
```
| Method | Scenario | Output|
| ------ | ------ | ------ 
| removeCohortByName(cohort(@string)) | | return the list of cohorts without the one removed |
```
As a Cohort-Manager, so that I can manage my student, I want to remove a student from a specific cohort.
```
| Method | Scenario | Output|
| ------ | ------ | ------ 
| removeStudent(name(@string)) | student found | return cohort without the student |
| | student not found | Invalid Student |
