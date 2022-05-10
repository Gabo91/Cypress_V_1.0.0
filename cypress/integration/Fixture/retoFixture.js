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
  
    it("Test uno Cargando desde Json",()=>{
       
        cy.fixture("Excel").then(testdata=>{
            testdata.forEach(data => {
                const d_nombre=data.nombre
                const d_email=data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2
                cy.visit("https://demoqa.com/text-box") 
                cy.title('').should('eq','ToolsQA')
                cy.wait(tiempo)
                cy.get('#userName').should('be.visible').type(d_nombre)
                cy.wait(tiempo)
                cy.get('#userEmail').should('be.visible').type(d_email)
                cy.wait(tiempo)
                cy.get('#currentAddress').should('be.visible').type(d_dir1)
                cy.wait(tiempo)
                cy.get('#permanentAddress').should('be.visible').type(d_dir2)
                cy.wait(tiempo)
                cy.get('#submit').should('be.visible').click({force:true})
                cy.wait(tiempo)
            })
        })
        
    })
})