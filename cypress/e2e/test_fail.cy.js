describe('template spec', () => {
  it('fails (later)', () => {
    cy.wait(10000)
    expect(true).to.equal(false)
  })
})