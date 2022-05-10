///<reference types="Cypress" />
 //para que funcionen los comandos
 require('@4tw/cypress-drag-drop')
import 'cypress-file-upload'
require('cypress-xpath')
describe("Cypress eventos Mouse", ()=>{
    it("Drag and Drop",()=>{
       cy.visit("https://the-internet.herokuapp.com/drag_and_drop") 
       cy.title("").should('eq','The Internet')
       cy.wait(1500)
       cy.get("#column-a").drag("#column-b", {force:true})
    })
    it("Drag and Drop",()=>{
      cy.visit("https://demos.telerik.com/kendo-ui/dragdrop/index") 
      cy.wait(1500)
      cy.get("#draggable").drag("#droptarget",{force:true})
   })
   it("Over",()=>{
      cy.visit("https://www.browserstack.com/guide/mouse-hover-in-selenium") 
      cy.title().should('eq','How to perform Mouse Hover Action in Selenium | BrowserStack')
      cy.wait(1500)

      cy.contains("Developers ").trigger('mouseover')
      //en caso de que te redirija a otra pagina asi se soluciona la pagina
      //cy.contains("lo que tenga ").invoke("removeAttr", "target"). click()
   })
   it.only("Slider",()=>{
      cy.visit("https://www.globalsqa.com/demo-site/sliders/") 
      cy.title().should('eq','Slider Online Testing Dummy Site | Demo Site- GlobalSQA')
      cy.xpath("/html/body/div[1]/span").invoke("attr", "value", "90")
      //invoke("attr", "value", "90")
   })
   Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    })//cierre de describe