import { orangeLocators } from "../locators/orangeLocators"

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

  dataFillCurrentDay() {
    const today = new Date()
    const dayOfMonth = today.getDate()
    cy.get(orangeLocators.dateInput).first().click()
    cy.get(orangeLocators.calendarDay).each(item => {
      if (item.text() == dayOfMonth.toString()) { 
        cy.wrap(item).click()
        return false
      } 
    })
  }

  submit() {
    cy.intercept('**/api/v2/performance/employees/reviews?limit=**').as('searchResults')
    cy.get(orangeLocators.submitBtn).click()
    cy.wait('@searchResults').then(res => {
      cy.log(res.response?.body)
    })
  }
}