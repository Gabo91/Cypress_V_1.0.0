///<reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'


describe('descripcion', ()=>{
    let tiempo=1000
    before(() => {
        cy.log("Principio de todo")
        // root-level hook
        // runs once before all tests
      })
      
      beforeEach(() => {
          cy.log("Esto se repite cada uno de los test muy importante")
          cy.visit("https://demoqa.com/text-box")
        // root-level hook
        // runs before every test block
      })
      
      afterEach(() => {
          cy.log("Esto se hace al final de todos los test")
        // runs after each test block
      })
      
      after(() => {
          cy.log("############## ultimo ciclo ---Final de todo#################")
        // runs once all tests are done
      })
    it('test uno',()=>{
        cy.log("test uno")
        
        })
    it('test dos',()=>{
            cy.log("test dos")
            
        })
     it('test tres',()=>{
            cy.log("test dos")
            cy.get('#userName').should('be.visible').type('harold')
            cy.wait(tiempo)
            
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) 
})