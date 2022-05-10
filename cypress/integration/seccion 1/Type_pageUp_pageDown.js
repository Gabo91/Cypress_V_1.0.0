///<reference types="Cypress" />
 //para que funcionen los comandos
describe("Ejemplo de Type pageUp, pageDown ", ()=>{
    it("Type pageUp ",()=>{
       cy.visit("https://demoqa.com/")
       cy.title().should('eq', 'ToolsQA')
       cy.wait(1500)
       cy.get("#app > div > div > div.home-body > div > div:nth-child(1)").click()
       cy.get(1500)
       cy.get("#item-0").click()
       
       cy.get("#userName").type('{pageup}')  
    })
    
    it("Type pageDown ",()=>{
      cy.visit("https://demoqa.com/")
      cy.title().should('eq', 'ToolsQA')
      cy.wait(1500)
      cy.get("#app > div > div > div.home-body > div > div:nth-child(1)").click()
      cy.get(1500)
      cy.get("#item-0").click()
      //cy.get("#userForm > div.mt-2.justify-content-end.row > div ").type('{pagedown}')
      cy.get("#userName").type('{pagedown}')
      
      
   })
   //Correra solo este por que tiene la funcion Only
   it.only("Type pageDown ultimo",()=>{
      cy.visit("https://demoqa.com/")
      cy.title().should('eq', 'ToolsQA')
      cy.wait(1500)
      cy.get("#app > div > div > div.home-body > div > div:nth-child(1)").click()
      cy.get(1500)
      cy.get("#item-0").click()
      //cy.get("#userForm > div.mt-2.justify-content-end.row > div ").type('{pagedown}')
      cy.get("#userName").type('{pagedown}')
      
      
   })
    
    
    })//cierre de describe