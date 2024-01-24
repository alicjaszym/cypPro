import { orangeLocators } from "../locators/orangeLocators"
import {common} from "../locators/commonLocators"
export class OrangePerformancePage{


  open() {
    cy.intercept(`**/web/index.php/api/v2/pim/employees?nameOrId=**`).as("currentPerson")
    cy.contains('Performance').click()
  }

  fillEmployeeNameField() {
    cy.get(orangeLocators.employeeNameField).click().type('pete').then(() => {
      cy.wait('@currentPerson').then(res => {
        cy.get(orangeLocators.listBox).click()
       })
    })
  }

  fillEmployeeReviewSelectField(num:number, itemName: string) {
    cy.get(orangeLocators.selectList).eq(num).click().then(item => {
      cy.get(orangeLocators.listBox).children().each((item,lap) => {
       if (item.text() == itemName) {
          cy.wrap(item).click()
        }
      })
    })
  }

  submit() {
    cy.intercept('**/api/v2/performance/employees/reviews?limit=**').as('searchResults')
    cy.get(common.submitBtn).click()
    cy.wait('@searchResults').then(res => {
      cy.log(res.response?.body)
    })
  }
}