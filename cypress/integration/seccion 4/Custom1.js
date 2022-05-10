///<reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'


describe('Comandos personalizados', ()=>{
    let tiempo=1000  
before(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.title('').should('eq','ToolsQA')
        cy.wait(tiempo)
})
    it('Demo uno',()=>{
        
        cy.Texto_visible("#userName","Juan",1000)
        cy.Texto_visible("#userEmail","harold,mejia@encora.com",1000)
        cy.Texto_visible_xpath("//textarea[@id='currentAddress']","harold",1000)
        cy.Texto_visible_xpath("//textarea[@id='permanentAddress']","123",1000)
        cy.Click_force_xpath("//*[@id='submit']",1000)
        })
    it.only('Demos dos por bloque',()=>{
        cy.Bloque_ToolsQA("Juan","juan@encora.com","direccion uno","direccion dos",1000)
    })  
      
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) 
})