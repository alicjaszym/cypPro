import {shopLocatorPage} from '../locators/shopLocatorsPage'

let itemDes
export class ShopPage{

  itemDescription() {
    cy.get(shopLocatorPage.singleProductDes).first().then(item => {
      cy.wrap(item.text()).as("itemDesc")
    })
  }

  addItemToCart() {
    cy.intercept("https://automationexercise.com/add_to_cart/1").as('addedToCart')
    cy.get(shopLocatorPage.addItemBtn).first().click()
    cy.wait('@addedToCart').then((res) => {
     expect(res.response?.body).contain('Added To Cart')
    })
  }

  modalContent() {
    cy.get(shopLocatorPage.modalItem).then(item => {
      expect(item.text()).contain('Added!')
    })
  }

  openCartPage() {
    cy.intercept("**/getconfig/sodar?sv=200&tid=gda&tv=r20240117&st=env").as("openCart")
    cy.get(shopLocatorPage.openCart).last().click()
    cy.wait('@openCart').then(res => {
      expect(res.response?.statusCode).eq(200)
    })
  }
}