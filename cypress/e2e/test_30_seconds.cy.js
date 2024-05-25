describe('template spec', () => {
  it('passes after 3 sec', () => {
    cy.wait(3000)
    expect(true).to.equal(true)
  })
})