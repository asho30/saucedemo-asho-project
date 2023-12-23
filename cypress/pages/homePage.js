export class HomePage {
    constructor() {
        this.selectors = {
            item1: "#add-to-cart-sauce-labs-backpack",
            item2: "#add-to-cart-sauce-labs-bike-light",
            item3: "#add-to-cart-sauce-labs-bolt-t-shirt",
            cartIcon: ".shopping_cart_link"
        }
    }

    isOpen() {
        cy.get(this.selectors.cartIcon).should('exist')
    }
    
    addItems(numberOfItems) {
        if (numberOfItems < 1 || numberOfItems > 3) {
            throw new Error("Number of Items should be 1 or 2 or 3")
        }
        else {
            switch (numberOfItems) {
                case '3':
                    cy.get(this.selectors.item3).click()
                case '2':
                    cy.get(this.selectors.item2).click()
                case '1':
                    cy.get(this.selectors.item1).click()
                    break;
            }
        }
    }

    openCart () {
        cy.get(this.selectors.cartIcon).click()
    }
}