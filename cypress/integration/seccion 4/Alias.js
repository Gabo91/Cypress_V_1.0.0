///<reference types="Cypress" />
 //para que funcionen los comandos
describe("Manejo de los  Alias", ()=>{
    it("Alias uno",()=>{ 
       cy.visit("https://demoqa.com/text-box")
       cy.get("#userName").should("be.visible").as("nom") 
       cy.get("@nom").type("pedro")
    })
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    })//cierre de describe