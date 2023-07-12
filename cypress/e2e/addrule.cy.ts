describe('Query Builder', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="btn-add-rule"]').click();
  });

  it('user can add rule by clicking the ADD RULE button', () => {
    cy.get('[data-testid="rule-item"]').should('exist');
    cy.get('[data-testid="field-select"]')
      .select('Age')
      .should('have.value', 'Age');

    cy.get('[data-testid="operator-select"]')
      .select('>')
      .should('have.value', '>');

    cy.get('[data-testid="general-input"]')
      .type('10')
      .should('have.value', '10');

    cy.get('[data-testid="query-output"]')
      .should('exist')
      .invoke('text')
      .then((text) => {
        const queryObject = JSON.parse(text);

        cy.wrap(queryObject.rules[0].field).should('eq', 'Age');
        cy.wrap(queryObject.rules[0].operator).should('eq', '>');
        cy.wrap(queryObject.rules[0].value).should('eq', '10');
      });
  });

  it('user can delete a rule', () => {
    cy.get('[data-testid="btn-delete-rule"]').click();

    cy.get('[data-testid="rule-item"]').should('not.exist');

    cy.get('[data-testid="query-output"]')
      .should('exist')
      .invoke('text')
      .then((text) => {
        const queryObject = JSON.parse(text);

        cy.wrap(queryObject.rules).should('have.length', 0);
      });
  });
});
