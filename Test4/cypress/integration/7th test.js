describe('7th Test', function () {
    before(function () {
        cy.log('******Before*****')
    })
    after(function () {
        cy.log('******After*****')
    })
    beforeEach(function () {
        cy.log('******beforeEach*****')
    })
    afterEach(function () {
        cy.log('******afterEach*****')
    })

    it('Test1', function () {
        cy.log('Test1')
    })
    it('Test2', function () {
        cy.log('Test2')
    })
    it('Test3', function () {
        cy.log('Test3')
    })
})
