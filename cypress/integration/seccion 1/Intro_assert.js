///<reference types="Cypress" />


 //para que funcionen los comandos
describe("Introduccion a los assert ", ()=>{
    it("Demos de los Assert ",()=>{
       cy.visit("https://demoqa.com/automation-practice-form") 
       cy.title().should('eq','ToolsQA')
       try {
         cy.wait(1000)
         cy.get("#firstName").should("be.visible").type("Harold")
         cy.wait(1000)
         cy.get("#lastName").should("be.visible").type("Mejia")
         cy.wait(1000)
         cy.get("#userEmail").should("be.visible").should("be.enabled").type("harold.mejia@encora.com")
       } catch (error) {
          
       }
      cy.wait(1000)
      cy.get("#firstName").should("be.visible").type("Harold")
      cy.wait(1000)
      cy.get("#lastName").should("be.visible").type("Mejia")
      cy.wait(1000)
      cy.get("#userEmail").should("be.visible").should("be.enabled").type("harold.mejia@encora.com")
    })
    
    
    })//cierre de describe