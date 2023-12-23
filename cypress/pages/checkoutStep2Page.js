export class CheckoutStep2Page {
    constructor() {
        this.selectors = {
            cartItemQuantity: ".cart_quantity",
            finishButton: "#finish"
        }
    }

    isOpen() {
        cy.get(this.selectors.finishButton).should('exist')
    }

    validateNumberOfCartItems(numberOfItems) {
        cy.get(this.selectors.cartItemQuantity).should('have.length',numberOfItems)
    }
    
    finishCheckout() {
        cy.get(this.selectors.finishButton).click()
    }
}