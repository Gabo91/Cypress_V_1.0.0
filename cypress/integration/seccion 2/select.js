///<reference types="Cypress" />
 //para que funcionen los comandos
describe("select", ()=>{
    it("Probando select  uno",()=>{
       cy.visit("https://demos.jquerymobile.com/1.4.5/selectmenu/") 
       cy.title("Selects - jQuery Mobile Demos").should('eq','Selects - jQuery Mobile Demos')
       cy.get("#select-native-1").select("The 3rd Option").should("have.value","3")
       cy.wait(2000)
       cy.get("#select-native-1").select("The 4th Option").should("have.value","4")

    })
    it("Probando select  enter 2",()=>{
      cy.visit("https://www.google.com/?hl=es") 
      cy.title("Google").should('eq','Google')
      cy.get(".gLFyf").type("Ferrari").type("{enter}")
      // cy.get(".goxjub").click()//activar el micro de google
      cy.get(".MUFPAc > :nth-child(2) > a").click()
   })
   it.only("Probando select  enter 3",()=>{
      cy.visit("https://testingqarvn.com.es/combobox-dependiente/") 
       
      //cy.get("#wsf-1-field-63").select(["Windows 7","Windows 10","Windows Server"]) // multi selects
      cy.get("#wsf-1-field-61").should("be.visible").select("Windows").then(()=>{
         cy.wait(1500)
         cy.get("#wsf-1-field-63").should("be.visible").select("Windows Server") 
      })
   })
    })//cierre de describe