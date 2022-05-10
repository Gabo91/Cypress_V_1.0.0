///<reference types="Cypress" />
 //para que funcionen los comandos
  
 describe("Verificacion de conocimiento", ()=>{
 //Rellenar el formulario correctamente.
  it("ADD FROM",()=>{ 
      
      cy.visit("https://demoqa.com/webtables") 
       cy.title("ToolsQA").should('eq','ToolsQA')
       
       cy.get("#addNewRecordButton").should("be.visible").click()
       
       cy.get("#firstName").should("be.visible").type("harold")
       
       cy.get("#lastName").should("be.visible").type("mejia")
       
       cy.get("#userEmail").should("be.visible").type("harold@gmail.com")
       
       cy.get("#age").should("be.visible").type("16")
      
       cy.get("#salary").should("be.visible").type("3600")
       
       cy.get("#department").should("be.visible").type("cochabamba")
       
       cy.get("#submit").should("be.visible").click()
    })  
    //Editamos un formulario previamente creado
    it(" EDIT FROM - SEARCH",()=>{ 
       cy.visit("https://demoqa.com/webtables") 

       cy.title("ToolsQA").should('eq','ToolsQA')

       //cy.get("#searchBox").should("be.visible").type("Cierra{enter}")

       cy.get("#edit-record-1 > svg").click()

       cy.get("#age").should("be.visible").clear().type("18")

       cy.get("#submit").should("be.visible").click()
       
    })  
    //editamos un fourmulario previamente registrado
    it("Delete",()=>{ 
      cy.visit("https://demoqa.com/webtables") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.get("#searchBox").should("be.visible").clear().type("Alden{enter}")

       cy.get("#delete-record-2 > svg > path").click()
    })  
        
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    })//cierre de describe