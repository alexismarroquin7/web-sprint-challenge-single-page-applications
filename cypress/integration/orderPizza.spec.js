describe('Pizza', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const nameInput = () => cy.get('input[name=name]');

    it('Type a name', () => {
        nameInput().should('exist');
    })
})