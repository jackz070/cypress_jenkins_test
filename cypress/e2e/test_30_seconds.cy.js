describe('template spec', () => {
  it('passes after 30 sec', () => {
    cy.wait(30000)
    expect(true).to.equal(true)
  })
})