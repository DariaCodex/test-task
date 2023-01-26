describe('Cravt', function () {
    it('Title page', function () {
        cy.visit('https://burger-king.by/')
        cy.title().should('eq', 'Бургер Кинг в Минск - Burger King Минск')
        
        cy.get('#Close_delivery_chosing_popup').click()
        cy.get('.btn btn_red js-btn-add-cart').contains('38694').click()


        

        //cy.title().should('eq', 'Search: dress - page 1 of 322 | ASOS')
        //cy.get('._2EAcS_V._2H7teJE').contains('Blouses').click()
        //cy.get('._2EAcS_V._2H7teJEs').contains('Co-ords').click()
        //cy.get('._3nSiBcE').click()
        //cy.get('._1TetmAG').click().type('Co-ords')
        //cy.get('.C_vX7H2.dV6RFzr').should('have.value', 'Co-ords')
        //cy.get('.kx2nDmW').click({ force: true })
        //cy.get('_30BqGyh').click()

    })
})