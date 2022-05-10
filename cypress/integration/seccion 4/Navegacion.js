///<reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'


describe('Navegacion entre las paginas', ()=>{
    it('Back, forward',()=>{
        let tiempo=1000
        cy.visit('https://demoqa.com')
        cy.title('').should('eq','ToolsQA')
        cy.wait(tiempo)

        cy.get(':nth-child(1) > :nth-child(1) > .card-up').should('be.visible').click()
        cy.wait(tiempo)

        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click()
        cy.wait(tiempo)

        cy.go("back")
        cy.go("back")

        cy.go("forward")
        cy.go("forward")
        })
        it.only('Reto  reload',()=>{
            let tiempo=1000
            cy.visit('https://demoqa.com')
            cy.title('').should('eq','ToolsQA')
            cy.wait(tiempo)
    
            cy.get(':nth-child(1) > :nth-child(1) > .card-up').should('be.visible').click()
            cy.wait(tiempo)
    
            cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').should('be.visible').click()
            cy.wait(tiempo)

            cy.get('#userName').should('be.visible').type('harold')
            cy.wait(tiempo)

            cy.get('#userEmail').should('be.visible').type('harold.mejia@encora.com')
            cy.wait(tiempo)
          
            cy.reload()
            cy.wait(tiempo)

            cy.go("back")
            })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) 
})