describe('Search Google', () => {
  it("search google", () => {
    cy.visit("https://www.google.com");
    cy.get('.gLFyf').type("Sitrack").should('have.value', 'Sitrack');
    cy.get('.FPdoLc > center > .gNO89b').click({force: true});
    
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="https://www.sitrack.com/"] > .LC20lb').click();
    /* ==== End Cypress Studio ==== */
  })
});