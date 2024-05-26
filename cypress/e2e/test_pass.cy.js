describe('template spec', () => {
  it('passes', () => {
    expect(true).to.equal(true)
    expect(Cypress.env('test')).to.equal('ooga booga')
    cy.log("as process env", process.env.message)
    cy.log("as cypress env", Cypress.env('message'))
  })
})