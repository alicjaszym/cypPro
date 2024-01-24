import {common} from '../locators/commonLocators'
export class Common{

  dataFillCurrentDay() {
    const today = new Date()
    const dayOfMonth = today.getDate()
    cy.get(common.dateInput).first().click()
    cy.get(common.calendarDay).each(item => {
      if (item.text() == dayOfMonth.toString()) { 
        cy.wrap(item).click()
        return false
      } 
    })
  }
}