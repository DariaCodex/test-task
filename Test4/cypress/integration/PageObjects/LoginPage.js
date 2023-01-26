/// <reference types="Cypress"/>

class LoginPage {

    visit() {
        cy.visit('https://admin-demo.nopcommerce.com/')
    }

    fillEmail(email) {
        let emailField = cy.get('#Email')
        emailField.clear()
        emailField.type(email)
        return this
    }

    fillPassword(password) {
        let passwordField = cy.get('#Password')
        passwordField.clear()
        passwordField.type(password)
        return this
    }

    submit()
    {
        let loginButton = cy.get('.button-1.login-button')
        loginButton.click()
    }

}