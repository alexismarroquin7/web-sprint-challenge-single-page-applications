describe('Pizza', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const pizzaButton = () => cy.get('#goToOrderForm');
    const nameInput = () => cy.get('input[name=name]');
    const selectSize = () => cy.get('select[name=size]');
    const pepperoniInput = () => cy.get('input[name=pepperoni]');
    const mushroomInput = () => cy.get('input[name=mushroom]');
    const hamInput = () => cy.get('input[name=ham]');
    const olivesInput = () => cy.get('input[name=olives]');
    const submitOrder = () => cy.get('button[type=submit]');
    const orderDiv = () => cy.get('.Order');

    describe('Can type in inputs', () => {
        it('Type text in name input', () => {
            pizzaButton().click();
            nameInput().type('Alexis Marroquin');
            nameInput().should('have.value', 'Alexis Marroquin');
        })
    })

    describe('Checking checkbox inputs', () => {
        it('Select multiple toppings', () => {
            pizzaButton().click();
            
            pepperoniInput().check();
            mushroomInput().check();
            hamInput().check();
            olivesInput().check();

            pepperoniInput().should('be.checked');
            mushroomInput().should('be.checked');
            hamInput().should('be.checked');
            olivesInput().should('be.checked');
        })
    })

    describe('Submit order', () => {
        it('Can order', () => {
            pizzaButton().click();
            nameInput().type('Alexis Marroquin');

            selectSize().select('medium')

            pepperoniInput().check();
            mushroomInput().check();
            hamInput().check();
            olivesInput().check();          

            submitOrder().click()

            orderDiv().should('exist');

        })
    })


})