export class CartPage {
    constructor() {
        this.selectors = {
            cartItemQuantity: ".cart_quantity",
            checkoutButton: "#checkout"
        }
    }

    isOpen() {
        cy.get(this.selectors.checkoutButton).should('exist')
    }

    validateNumberOfCartItems(numberOfItems) {
        cy.get(this.selectors.cartItemQuantity).should('have.length',numberOfItems)
    }

    checkout() {
        cy.get(this.selectors.checkoutButton).click()
    }
}