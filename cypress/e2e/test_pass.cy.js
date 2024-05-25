describe('template spec', () => {
  it('passes', () => {
    expect(true).to.equal(true)
    expect(Cypress.env('test')).to.equal('ooga booga')
    cy.log(process.env.message)
  })
})