describe('template spec', () => {
  it('passes after 45 sec', () => {
    cy.wait(45000)
    expect(true).to.equal(true)
  })
})