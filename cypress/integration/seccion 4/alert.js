///<reference types="Cypress" />
 //para que funcionen los comandos
describe("Alertas en cypress", ()=>{
    it(" Alerta uno",()=>{
       cy.visit("https://demoqa.com/alerts") 
      cy.get("#alertButton").click({force:true})
      /* cy.on("window:alert",(srt)=>{
          expect(srt).eq("I am an alert box!")
          return true;
       })*/
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    
    
    })//cierre de describe