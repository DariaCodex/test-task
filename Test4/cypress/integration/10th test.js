/// <reference types="Cypress"/>

import LoginPage from '../integration/PageObjects/LoginPage'

describe('Login test', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Valid login test', function () {
        let loginPage = new LoginPage()
        loginPage.visit()
        loginPage.fillEmail(this.data.email)
        loginPage.fillPassword(this.data.password)
        loginPage.submit()
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
    })
})