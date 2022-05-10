///<reference types="Cypress" />
 //para que funcionen los comandos
describe("Configuracion y uso de los snippets", ()=>{
      it("Snippet uno",()=>{
         let tiempo=1500;
         cy.visit("https://demoqa.com/text-box/") 
         cy.title("").should('eq','ToolsQA')
         cy.wait(tiempo) 
      })
      Cypress.on('uncaught:exception', (err, runnable) => {
         // returning false here prevents Cypress from
         // failing the test
         return false
       })
    })//cierre de describe