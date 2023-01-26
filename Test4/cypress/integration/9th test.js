describe('Custom commands', function () {
    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('Custom commands', function () {

        cy.login(this.data.email, this.data.password)
        cy.title().should('eq', 'Dashboard / nopCommerce administration')
    })
})