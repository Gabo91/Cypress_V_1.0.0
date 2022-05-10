///<reference types="Cypress" />

require('cypress-plugin-tab')
 //para que funcionen los comandos
describe("Segundo Reto", ()=>{
    it.only("Add a new Computer",()=>{
       cy.visit("https://computer-database.gatling.io/computers") 
       cy.title("Computers database").should('eq','Computers database')
       cy.wait(1000)
       //agregar una computadora
       cy.get("#add").should("be.visible").click()
       cy.wait(1000)
       cy.get("#name").should("be.visible").type("Dell Harold").tab().
       type("2021-05-02").tab().type("2025-12-18").tab()
       cy.get("#company").should("be.visible").select("IBM").should("have.value","13").select("RCA").should("have.value","3")
       cy.wait(2000)
       cy.get(".primary").should("be.visible").click()
       //Buscamos una computadora
       cy.get("#searchbox").should("be.visible").type("Dell Vostro")
       cy.get("#searchsubmit").should("be.visible").click()
       //editamos
       cy.get("tbody > tr > :nth-child(1) > a").should("be.visible").click()
       cy.get("#name").should("be.visible").clear().type("Dell Harold").tab().
       type("2021-05-02").tab().type("2025-12-18").tab()
       cy.get("#company").should("be.visible").select("IBM")
       cy.get(".primary").should("be.visible").click()
       //delete
       cy.get("#searchbox").should("be.visible").type("Dell Vostro")
       cy.get("#searchsubmit").should("be.visible").click()
       cy.get("tbody > tr > :nth-child(1) > a").should("be.visible").click()
       cy.get(".topRight > .btn").should("be.visible").click({force: true})
    })
    it("Filter cualquier usuario",()=>{
       cy.visit("https://computer-database.gatling.io/computers") 
       cy.title("Computers database").should('eq','Computers database')
       cy.wait(1000)
       cy.get("#searchbox").should("be.visible").type("Dell Vostro")
       cy.get("#searchsubmit").should("be.visible").click()

    })
    
    })//cierre de describe