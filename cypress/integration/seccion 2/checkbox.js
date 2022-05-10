///<reference types="Cypress" />
 //para que funcionen los comandos
describe("Nueva seccion Checbox", ()=>{
    it(" check todos",()=>{
       cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/") 
       cy.title("Prueba de campos Checkbox | TestingQaRvn").should('eq','Prueba de campos Checkbox | TestingQaRvn')
       cy.get("[type='checkbox']").check({force: true}).should("be.checked")
       //cy.get("#wsf-1-label-36-row-1").click()
       cy.get("[type='checkbox']").uncheck({force: true}).should("not.be.checked")
    })
    
    it(" check solo 1",()=>{
      cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/") 
      cy.title("Prueba de campos Checkbox | TestingQaRvn").should('eq','Prueba de campos Checkbox | TestingQaRvn')
      
      cy.get("[class='rct-checkbox']").check({force: true}).should("be.checked")
      //cy.get("#wsf-1-label-36-row-1").click()
   }) 
    })//cierre de describe