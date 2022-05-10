///<reference types="Cypress" />
 //para que funcionen los comandos
 import 'cypress-file-upload'
 require('cypress-xpath')
describe("Upload Imagenes", ()=>{
    it("cargando imagenes",()=>{
       cy.visit("https://demoqa.com/automation-practice-form") 
       cy.title('').should('eq',"ToolsQA")
       cy.wait(1500)
       const ruta='img1.jpg'
       //const doc='doc1.pdf'
       cy.get("[type='file']").attachFile(ruta)
       cy.wait(2000)
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    
    })//cierre de describe