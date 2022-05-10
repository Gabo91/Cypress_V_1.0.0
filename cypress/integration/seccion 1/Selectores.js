///<reference types="Cypress" />
require('cypress-xpath')
 //para que funcionen los comandos
describe("Typos de Selectores ", ()=>{
    it("Selector por ID ",()=>{
       cy.visit("https://demoqa.com/text-box") 
       cy.title("ToolsQA").should('eq','ToolsQA')
       cy.wait(1000)
       cy.get("#userName").should("be.visible").type("Hola")
   
    })
    it("Selector por atributo",()=>{
      cy.visit("https://demoqa.com/text-box") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(1000)
      cy.get("[placeholder='Full Name']").should("be.visible").clear().type("Harold")
   })
   it("Selectores por Xpath",()=>{
      cy.visit("https://demoqa.com/text-box") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(1000)
      cy.xpath("//*[@id='userName']").should("be.visible").type("Juan Perez")
      cy.xpath("//input[contains(@placeholder,'name@example.com')]").should("be.visible").type("harold@encora.com")
      cy.xpath("//textarea[contains(@id,'currentAddress')]").type("holi")
   })
   it("Selectores por Containes",()=>{
      cy.visit("https://demoqa.com/automation-practice-form") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(1000)
     cy.get(".custom-control-label").contains("Male").click()
     cy.wait(1000)
     cy.get(".custom-control-label").contains("Other").click()
   })
   it.only("Selectores por Selector",()=>{
      cy.visit("https://demoqa.com/automation-practice-form") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(1000)
     cy.get("#userNumber").should("be.visible").type("33212")
   })
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    })//cierre de describe