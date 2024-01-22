import cypress from "cypress"
import { OrangePerformancePage } from "../pages/orangePerformancePage"

describe("added some orange tests", () => {
  
  let orangePerformancePage : OrangePerformancePage

  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('user_password'))
    orangePerformancePage = new OrangePerformancePage()
    cy.visit("/")
  })

  it("employee reviews", () => {
    orangePerformancePage.open()
    orangePerformancePage.fillEmployeeNameField()
    orangePerformancePage.fillEmployeeReviewSelectField(0,"Finance Manager")
    orangePerformancePage.fillEmployeeReviewSelectField(1, "Administration")
    orangePerformancePage.fillEmployeeReviewSelectField(3, "Activated")
    orangePerformancePage.dataFillCurrentDay()
    orangePerformancePage.submit()
  })
})