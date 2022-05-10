///<reference types="Cypress" />
require('cypress-xpath')
 //para que funcionen los comandos
describe(" Reto", ()=>{
    it(" Multi select",()=>{
       cy.visit("https://www.zkoss.org/zkdemo/listbox/dual_listbox") 
       cy.title("ZK Live Demo - Dual Listbox").should('eq','ZK Live Demo - Dual Listbox')
       //cy.get(".z-listcell-content").should("be.visible").select("Willy")
       cy.get(".z-listbox-body").then(()=>{
         cy.wait(1500)
        // cy.get(".z-listcell-content").click({ multiple: true })
        cy.get(".z-listcell-content").then(()=>{
        cy.xpath("(//div[@class='z-listcell-content'])[1]").click()
        cy.xpath("(//img[@class='z-image'])[2]").click()
        cy.xpath("(//img[@class='z-image'])[1]").click()
        cy.xpath("(//img[@class='z-image'])[4]").click()
        })
      })
    })
    
    
    })//cierre de describe