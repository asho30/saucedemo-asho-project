export class CheckoutStep1Page {
    constructor() {
        this.selectors = {
            firstNameTextBox: "#first-name",
            lastNameTextBox: "#last-name",
            postalCodeTextBox: "#postal-code",
            continueButton: "#continue"
        }
    }
    
    isOpen() {
        cy.get(this.selectors.continueButton).should('exist')
    }

    completeCheckout(firstName,lastName,postalCode) {
        cy.get(this.selectors.firstNameTextBox).type(firstName)
        cy.get(this.selectors.lastNameTextBox).type(lastName)
        cy.get(this.selectors.postalCodeTextBox).type(postalCode)
        cy.get(this.selectors.continueButton).click()
    }
}