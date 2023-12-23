export class BasePage {
    constructor() {
        this.selectors = {
            usernameTextBox: "#user-name",
            passwordTextBox: "#password",
            LoginButton: "#login-button",
        }
    }

    login(username,password) {
        cy.get(this.selectors.usernameTextBox).type(username)
        cy.get(this.selectors.passwordTextBox).type(password)
        cy.get(this.selectors.LoginButton).click()
    }
}