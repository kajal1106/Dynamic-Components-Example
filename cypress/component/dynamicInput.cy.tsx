describe('DynamicInput Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add and remove input fields', () => {
    // Initial state, should have only one input field
    cy.get('[data-testid="input"]').should('have.length', 1);

    // Add a new input field
    cy.get('[data-testid="add-input"]').click();
    cy.get('[data-testid="input"]').should('have.length', 2);

    // Add another input field
    cy.get('[data-testid="add-input"]').click();
    cy.get('[data-testid="input"]').should('have.length', 3);

    // Remove an input field
    cy.get('[data-testid="remove-input"]').first().click();
    cy.get('[data-testid="input"]').should('have.length', 2);
  });

  it('should validate input length', () => {
    // Enter a value less than 5 characters
    cy.get('[data-testid="input"]').first().type('1234');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="error-message"]').should('be.visible');

    // Enter a value with 5 or more characters
    cy.get('[data-testid="input"]').first().clear().type('12345');
    cy.get('[data-testid="submit"]').click();
    cy.get('[data-testid="error-message"]').should('not.exist');
  });

  it('should submit the form with input values', () => {
    // Enter values in input fields
    cy.get('[data-testid="input"]').each((input, index) => {
      cy.wrap(input).type(`Value ${index + 1}`);
    });

    // Submit the form
    cy.get('[data-testid="submit"]').click();

    // Assert the form submission or perform any other validation
    // ...
  });
});
