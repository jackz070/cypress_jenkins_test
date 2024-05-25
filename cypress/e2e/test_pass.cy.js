describe('template spec', () => {
  it('passes', () => {
    expect(true).to.equal(true)
    expect(Cypress.env('test')).to.equal('ooga booga')
    console.log("HELLO THERE")
  })
})