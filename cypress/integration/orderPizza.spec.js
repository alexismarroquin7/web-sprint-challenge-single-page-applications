describe('Pizza', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const pizzaButton = () => cy.get('#goToOrderForm')
    const nameInput = () => cy.get('input[name=name]');

    it('Type text in name input', () => {
        pizzaButton().click();
        nameInput().type('Alexis Marroquin');
        nameInput().should('have.value', 'Alexis Marroquin');
    })
})