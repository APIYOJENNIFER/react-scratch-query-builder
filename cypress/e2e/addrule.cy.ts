describe('Query Builder', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="btn-add-rule"]').click();
  });

  it('user can toggle the logical option', () => {
    cy.get('[data-testid="logical-select"]')
      .select('OR')
      .should('have.value', 'OR');
  });

  it('user can add rule by clicking the ADD RULE button', () => {
    cy.get('[data-testid="field-select"]').should('exist');
    cy.get('[data-testid="operator-select"]').should('exist');
    cy.get('[data-testid="general-input"]').should('exist');
    cy.get('[data-testid="btn-delete-rule"]').should('exist');
  });

  it('user can delete a rule', () => {
    cy.get('[data-testid="btn-delete-rule"]').click();
    cy.get('[data-testid="field-select"]').should('not.exist');
    cy.get('[data-testid="operator-select"]').should('not.exist');
    cy.get('[data-testid="general-input"]').should('not.exist');
    cy.get('[data-testid="btn-delete-rule"]').should('not.exist');
  });

  it('user can select a field', () => {
    cy.get('[data-testid="field-select"]')
      .select('Age')
      .should('have.value', 'Age');
  });

  it('user can select an operator', () => {
    cy.get('[data-testid="operator-select"]')
      .select('>')
      .should('have.value', '>');
  });

  it('user can type in a value', () => {
    cy.get('[data-testid="general-input"]')
      .type('John')
      .should('have.value', 'John');
  });

  it('can validate input and display the right error message', () => {
    cy.get('[data-testid="general-input"]').type('John12');
    cy.get('[data-testid="error-message"]').should(
      'have.text',
      'Name should contain alphabetical characters only'
    );
  });

  it('displays a checkbox option if selected field is "Has Graduated"', () => {
    cy.get('[data-testid="field-select"]').select('Has Graduated');
    cy.get('[data-testid="checkbox-input"]').should('exist');
    cy.get('[data-testid="general-input"]').should('not.exist');
    cy.get('[data-testid="radio-input"]').should('not.exist');
  });

  it('user can check an option if selected field is "Has Graduated"', () => {
    cy.get('[data-testid="field-select"]').select('Has Graduated');
    cy.get('[data-testid="checkbox-input"]')
      .should('not.be.checked')
      .check()
      .should('be.checked');
  });

  it('user can select the right radio option if field is "Housing"', () => {
    cy.get('[data-testid="field-select"]').select('Housing');
    cy.get('[data-testid="non-resident"]')
      .check()
      .should('have.value', 'Non-Resident');
    cy.get('[data-testid="resident"]').should('not.be.checked');
  });
});
