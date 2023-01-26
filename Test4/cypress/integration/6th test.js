describe('6th Test', function () {
    it('Tables', function () {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($el, index, $list) => {
            let author = $el.text()
            if (author == 'Amod') {
                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then((element) => {
                    let bookName = element.text()
                    expect(bookName).to.equal('Master In Java')
                })
            }
        })


    })

})