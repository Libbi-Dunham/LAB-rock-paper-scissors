
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('is a button', ()=>{
            cy.get('button').should('be.visible');
        });
    });
});