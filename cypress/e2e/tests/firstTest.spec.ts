import { CartPage } from "../pages/cartPage"
import { ShopPage } from "../pages/shopPage"

describe("tests", () => {
  let shopPage: ShopPage
  let cartPage: CartPage
  

  beforeEach(() => {
    shopPage = new ShopPage()
    cartPage = new CartPage
    cy.login(Cypress.env('user_name'), Cypress.env('user_password'))
   })
  it.skip("add item to the cart and check if added", () => { 
    cy.visit("/")
    shopPage.itemDescription()
    shopPage.addItemToCart()
    shopPage.modalContent()
    //shopPage.openCartPage()
   // cartPage.assertItemAddedToCart()
  })
})

