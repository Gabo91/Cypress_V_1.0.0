///<reference types="Cypress" />
 //para que funcionen los comandos
describe("Referencias a windows", ()=>{
    it("windows propiedad charset ",()=>{
       cy.visit("https://testsheepnz.github.io/random-number.html") 
       cy.title().should('eq','The Number Game')
       cy.wait(1500)
       cy.document().should("have.a.property","charset").and('eq','UTF-8')
    })
    it("windows URL ",()=>{
      cy.visit("https://testsheepnz.github.io/random-number.html") 
      cy.title().should('eq','The Number Game')
      cy.wait(1500)
      cy.url().should("include","random-number.html")
      cy.url().should("eq","https://testsheepnz.github.io/random-number.html")
   })
    
    
    })//cierre de describe