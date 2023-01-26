describe('My First Test', function () {
    it('Checkbox', function () {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('[type=checkbox]').check(['Cricket', 'Movies'])

    })

    it('Dropdown', function () {
        cy.get('#Skills').select('Android').should('have.value', 'Android')

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Arabic').click()


        cy.get('.select2-selection__rendered').click({ force: true })
        cy.get('.select2-search__field').type('In{enter}')
        cy.get('.select2-selection__rendered').contains('India')

    })
})