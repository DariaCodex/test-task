describe('My First Test', function () {
    it('First page test', function () {
        cy.visit('https://netfonds.de/')
        cy.title().should('eq', 'Die Netfonds Gruppe - Maklerpool, Haftungsdach, Mehrfachagent')
        cy.get('#cookie_banner_button_2').click()
        cy.get('#search_input_menu_main').type('FAQ').type('{enter}')
        cy.wait(3000)
        cy.get('div.blog_container:nth-child(4) div.blog_content div.blog_container:nth-child(10) \
        div.blog_content div.blog_small_article:nth-child(11) > div.blog_small_article_text:nth-child(2)').click()
    })
})

