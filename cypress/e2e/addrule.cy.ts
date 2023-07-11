describe('Query Builder', () => {
  it('user can add rule by clicking the ADD RULE button', () => {
    cy.visit('http://localhost:3000');

    // click the ADD RULE button
    cy.get('.App-top-section > [data-testid = "general-button"]').click();

    // select logical option (OR)
    cy.get('[data-testid="logical-select"]')
      .select('OR')
      .should('have.value', 'OR');

    // select the first field option (First Name), select the > operator and type in a value
    cy.get('[data-testid="field-select"]').eq(0).select('First Name');

    cy.get('[data-testid="operator-select"]').eq(0).select('>');

    cy.get('[data-testid="general-input"]')
      .eq(0)
      .type('Jane')
      .should('contain.value', 'Jane');

    //Add a second rule
    cy.get('.App-top-section > [data-testid = "general-button"]').click();

    // select AND logical option
    cy.get('[data-testid="logical-select"]')
      .select('AND')
      .should('have.value', 'AND');

    // select field option (Last Name), type in a wrong value, and check if the right error message is displayed
    cy.get('[data-testid="field-select"]')
      .eq(1)
      .select('Last Name')
      .should('have.value', 'Last Name');
    cy.get('[data-testid="general-input"]').eq(1).type('Doe22');

    cy.get('[data-testid="error-message"]').should(
      'have.text',
      'Name should contain alphabetical characters only'
    );

    // add a third rule
    cy.get('.App-top-section > [data-testid = "general-button"]').click();

    // select field option (Age) and check if it has the right placeholder text
    cy.get('[data-testid="field-select"]').eq(2).select('Age');
    cy.get('[data-testid="general-input"]')
      .eq(2)
      .should('have.attr', 'placeholder', 'E.g 10');

    // add a fourth rule
    cy.get('.App-top-section > [data-testid = "general-button"]').click();
    // select field option (Housing)
    cy.get('[data-testid="field-select"]').eq(3).select('Housing');
    cy.get('[data-testid="non-resident"]')
      .check()
      .should('have.value', 'Non-Resident');

    // add a fifth rule
    cy.get('.App-top-section > [data-testid = "general-button"]').click();

    // select field option (Has Graduated), assert value before and after checking
    cy.get('[data-testid="field-select"]').eq(4).select('Has Graduated');
    cy.get('[data-testid="checkbox-input"]')
      .should('not.be.checked')
      .check()
      .should('be.checked');

    // add a six rule
    cy.get('.App-top-section > [data-testid = "general-button"]').click();

    // delete the six rule
    cy.get('.div-input-error > div > [data-testid="general-button"]')
      .eq(5)
      .click();
  });
});
