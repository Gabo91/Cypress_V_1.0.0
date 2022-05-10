///<reference types="Cypress" />

describe("Seccion 1 Validando el titulo ", ()=>{
    it("Test Validar el titulo ", ()=>{
       cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/") 
       cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
       cy.wait(1500)
       cy.get("#wsf-1-field-29").type("Harold")
       cy.wait(5000)
       cy.get("#wsf-1-field-30").type("Mejia")
       cy.wait(5000)
       cy.get("#wsf-1-field-31").type("harold.mejia@encora.com")
       cy.wait(5000)
       cy.log("OK la funcion title funciono bien")
    })
    
    
    })//cierre de describe