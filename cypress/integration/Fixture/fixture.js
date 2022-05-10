///<reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'



describe('Carga de Fixture', ()=>{
    let tiempo=500;
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      }) 
    before(function(){
        cy.fixture('datos.json').then(function(data){
        //this.data=data
        globalThis.data=data;
        })
    })
  
    it("Test uno Cargando desde Json",()=>{
        cy.visit("https://demoqa.com/text-box") 
        cy.title('').should('eq','ToolsQA')
        cy.wait(tiempo)
        cy.get('#userName').should('be.visible').type(data.nombre)
        cy.wait(tiempo)
        cy.get('#userEmail').should('be.visible').type(data.email)
        cy.wait(tiempo)
        cy.get('#currentAddress').should('be.visible').type(data.dir1)
        cy.wait(tiempo)
        cy.get('#permanentAddress').should('be.visible').type(data.dir2)
        cy.wait(tiempo)
        cy.get('#submit').should('be.visible').click({force:true})
        cy.wait(tiempo)

    
         })
})