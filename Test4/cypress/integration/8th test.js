describe('name', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('Login and password', function () {
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type(this.data.email)
        cy.get('#Password').clear().type(this.data.password)
        cy.get('.button-1.login-button').click()
    })
})