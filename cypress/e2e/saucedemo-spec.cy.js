import { BasePage } from '../pages/basePage'
import { HomePage } from '../pages/homePage'
import { CartPage } from '../pages/cartPage'
import { CheckoutStep1Page } from '../pages/checkoutStep1Page'
import { CheckoutStep2Page } from '../pages/checkoutStep2Page'
import { CheckoutCompletePage } from '../pages/checkoutCompletePage'
const basePage = new BasePage()
const homePage = new HomePage()
const cartPage = new CartPage()
const checkoutStep1Page = new CheckoutStep1Page()
const checkoutStep2Page = new CheckoutStep2Page()
const checkoutCompletePage = new CheckoutCompletePage()
let  numberOfItems, firstName, lastName, postalCode

describe('cypress automation challenge spec', () => {
  before(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  beforeEach(() => {
    cy.fixture('user').then((data)=>{
      basePage.login(data.username,data.password)
      firstName = data.firstName
      lastName = data.lastName
      postalCode = data.postalCode
      numberOfItems = data.numberOfItems
    })
  })

  it('should complete a full scenario on saucedemo', () => { 
    //1.Validate the url after login and Add (numberOfItems) items in the cart.
    homePage.isOpen()
    cy.validateUrl(Cypress.config().homeUrl)
    homePage.addItems(numberOfItems)
    //2.Open the cart and Validate the url.
    homePage.openCart()
    cartPage.isOpen()
    cy.validateUrl(Cypress.config().cartUrl)
    //3.Validate the number of items in the cart.
    cartPage.validateNumberOfCartItems(numberOfItems)
    //4.Checkout.
    cartPage.checkout()
    //5.Validate the url of checkout step 1 and complete the checkout.
    checkoutStep1Page.isOpen()
    cy.validateUrl(Cypress.config().checkoutStep1Url)
    checkoutStep1Page.completeCheckout(firstName,lastName,postalCode)
    //6.Validate the url of checkout step 2.
    checkoutStep2Page.isOpen()
    cy.validateUrl(Cypress.config().checkoutStep2Url)
    //7.Validate the number of items after checkout.
    checkoutStep2Page.validateNumberOfCartItems(numberOfItems)
    //8.Finish checkout and Validate the url.
    checkoutStep2Page.finishCheckout()
    checkoutCompletePage.confirmPurchaseAndBackHome()
    homePage.isOpen()
    cy.validateUrl(Cypress.config().homeUrl)
  })

  after(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })
})