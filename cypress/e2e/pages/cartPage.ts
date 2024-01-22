import { cartPageLocators } from "../locators/cartPageLocators"



export class CartPage{

  assertItemAddedToCart() {
    cy.get("@itemDesc").then(item => {
      cy.log(item, '00000000000000000')
    } )
    cy.get(cartPageLocators.itemInTheTable).each(item => {
      cy.log(item.text(), 'oraz      ', )
      
    })
  }
}