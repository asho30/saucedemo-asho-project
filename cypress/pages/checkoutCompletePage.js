export class CheckoutCompletePage {
    constructor() {
        this.selectors = {
            confirmPurchaseMessage: ".complete-header",
            backHomeButton: "#back-to-products",

        }
    }
    
    confirmPurchaseAndBackHome() {
        cy.get(this.selectors.confirmPurchaseMessage).contains("Thank you for your order!")
        cy.get(this.selectors.backHomeButton).click()
    }
}