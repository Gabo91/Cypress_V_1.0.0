///<reference types="Cypress" />
require('cypress-xpath')
 //para que funcionen los comandos
describe("Manejo de invoke", ()=>{
    it("invoke text",()=>{ 
       cy.visit("https://demoqa.com/text-box")
       cy.get("#userEmail-label").invoke("text").as("info")
       cy.get("#userEmail").type("haroldmejia@gmail.com")
       cy.get("@info").should("contain","Email")
       cy.get("#userName-label").invoke("text").as("name")
       cy.get("@name").should("contain","Full Name").then(()=>{
         cy.get("#userName").type("harold")
       })

    })
    it("invoke estilos",()=>{ 
      cy.visit("https://demoqa.com/text-box")
      cy.get("#userName-label").invoke("attr","style","color:Blue; font-size: 50px")
   })
   it("invoke ocualtar y mostrar",()=>{ 
    cy.visit("https://demoqa.com/text-box")
    cy.get("#userName-label").invoke("hide")
    cy.get("#userName").invoke("hide")
    cy.get("#userName").invoke("show","4s")

 })
  it("reto",()=>{ 
    cy.visit("https://demoqa.com/text-box")
  
    cy.get("#userEmail-label").invoke("hide")
    cy.get("#userEmail").invoke("hide")
    cy.get("#currentAddress-label").invoke("hide")
    cy.get("#currentAddress").invoke("hide")
    cy.get("#permanentAddress-label").invoke("hide")
    cy.get("#permanentAddress").invoke("hide")
    cy.get("#submit").invoke("hide")
      cy.get("#userName").type("Harold").then(()=>{
          cy.get("#userEmail-label").invoke("show", "5s")
          cy.get("#userEmail").invoke("show","5s").type("harold.mejia@encora.com")
          cy.get("#currentAddress-label").invoke("show", "5s")
          cy.get("#currentAddress").invoke("show", "5s").type("villa granado")
          cy.get("#permanentAddress-label").invoke("show", "5s")
          cy.get("#permanentAddress").invoke("show", "5s").type("Munay 55")
          cy.get("#submit").invoke("show", "5s").click()
          cy.get("#name").should("have.text","Name:Harold")
          cy.get("#email").should("have.text","Email:harold.mejia@encora.com")
          cy.xpath("//p[contains(@id,'currentAddress')]").should("have.text",'Current Address :villa granado ')
          cy.xpath("//p[contains(@id,'permanentAddress')]").should("have.text","Permananet Address :Munay 55")
      })
})
it("invoke scr",()=>{ 
  cy.visit("https://testingqarvn.com.es/practicas-qa/")
  cy.xpath("//img[contains(@height,'1000')]").invoke("attr","src").should("include","robotics-01.png")
})
it.only("invoke target blank",()=>{ 
  cy.visit("https://dvwa.co.uk/")
  cy.wait(1500)
  cy.xpath("(//a[contains(@target,'_blank')])[1]").invoke("removeAttr","target").click({force:true})
})
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    })//cierre de describe