export class OrangeLeavePage{

  open() {
    cy.intercept('**/api/v2/leave/employees/leave-requests**').as('leave')
    cy.contains('Leave').click()
  }

  leaveRecords() {
    cy.wait('@leave').then(res => {
      const response = res.response?.body.data
      const test = response.filter(item => item.lastComment !== null)
      
    })
  }
}