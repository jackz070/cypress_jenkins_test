describe('template spec', () => {
  it('passes after 4.5 sec', () => {
    cy.wait(4500)
    expect(true).to.equal(true)
  })
})