import cypress from "cypress"
import { OrangePerformancePage } from "../pages/orangePerformancePage"
import { Common } from "../common/common"
import { OrangeLeavePage } from "../pages/orangeLeavePage"

describe("added some orange tests", () => {
  
  let orangePerformancePage: OrangePerformancePage
  let common: Common
  let orangeLeavePage: OrangeLeavePage

  beforeEach(() => {
    cy.login(Cypress.env('user_name'), Cypress.env('user_password'))
    orangePerformancePage = new OrangePerformancePage()
    common = new Common()
    orangeLeavePage = new OrangeLeavePage()
    cy.visit("/")
  })

  it("employee reviews", () => {
    orangePerformancePage.open()
    orangePerformancePage.fillEmployeeNameField()
    orangePerformancePage.fillEmployeeReviewSelectField(0,"Finance Manager")
    orangePerformancePage.fillEmployeeReviewSelectField(1, "Administration")
    orangePerformancePage.fillEmployeeReviewSelectField(3, "Activated")
    common.dataFillCurrentDay()
    orangePerformancePage.submit()
  })


  it("leave tab", () => {
    orangeLeavePage.open()
    orangeLeavePage.leaveRecords()
  })
})