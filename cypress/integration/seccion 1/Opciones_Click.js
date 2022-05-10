///<reference types="Cypress" />
 //para que funcionen los comandos
describe("Opciones de Clic", ()=>{
    it("Clic Sencillo",()=>{
       cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials") 
       cy.title("OrangeHRM").should('eq','OrangeHRM')
       cy.wait(1000)
       cy.get("#txtUsername").should("be.visible").type("Admin")
       cy.wait(1000)
       cy.get("#txtPassword").should("be.visible").type("admin123")
       cy.wait(1000)
       cy.get("#btnLogin").should("be.visible").click()
       cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click()
       cy.wait(1000)
       cy.get("#menu_pim_viewPimModule > b").should("be.visible").click()
   
    })
    it("Clic Force true",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials") 
      cy.title("OrangeHRM").should('eq','OrangeHRM')
      cy.wait(1000)
      cy.get("#txtUsername").should("be.visible").type("Admin")
      cy.wait(1000)
      cy.get("#txtPassword").should("be.visible").type("admin123")
      cy.wait(1000)
      cy.get("#btnLogin").should("be.visible").click()
      cy.get("#menu_admin_viewAdminModule > b").should("be.visible").click()
      cy.wait(1000)
      cy.get("#menu_pim_viewPimModule > b").should("be.visible").click({force: true})
   })
   it.only("Clic por coordenadas",()=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials") 
      cy.title("OrangeHRM").should('eq','OrangeHRM')
      cy.wait(1000)
      cy.get("#txtUsername").should("be.visible").type("Admin")
      cy.wait(1000)
      cy.get("#txtPassword").should("be.visible").type("admin123")
      cy.wait(1000)
      cy.get("#btnLogin").should("be.visible").click()
      cy.get("#MP_link").should("be.visible").click(100,5)
   })
    
    
    })//cierre de describe