///<reference types="Cypress" />
 //para que funcionen los comandos
describe("Rariobutton", ()=>{
    it("Radios buton",()=>{

       cy.visit("https://testingqarvn.com.es/radio-buttons/") 
       cy.title("Radio Buttons | TestingQaRvn").should('eq','Radio Buttons | TestingQaRvn')
       //cy.get("[type='radio']").check({force: true})
      
       cy.get("#wsf-1-field-42-row-1").check({force: true}).should("be.checked")
       //cy.get("[type='radio']").first().check({force: true})
       //cy.get("#wsf-1-label-44-row-3").click()
      cy.get("[type='radio']").check({force: true})
    })
    
    
    })//cierre de describe