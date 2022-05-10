// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 Cypress.Commands.add('Texto_visible', (selector, texto,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
  })
  Cypress.Commands.add('Texto_visible_xpath', (selector, texto,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(tiempo)
  })
  Cypress.Commands.add('Click', (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
  })
  Cypress.Commands.add('Click_force', (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
  })
  Cypress.Commands.add('Click_force_xpath', (selector,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(tiempo)
  })
  Cypress.Commands.add('Click_xpath', (selector,t) => { 
    let tiempo=t
    cy.xpath(selector).should('be.visible').click()
    cy.wait(tiempo)
  })
  //validar campos
  Cypress.Commands.add('Validar_campo', (selector,men,nombre_campo,t) => { 
    let tiempo=t
    cy.get(selector).should("be.visible").then((val)=>{
        let dato=val.text()
        let mensaje=men  
        cy.log(dato)
        expect(dato).to.equal(mensaje)
        if(dato==mensaje){
            cy.log("#########################")
            cy.log("El "+ nombre_campo + " no es valido")
            cy.log("#########################")
        }
    })
    cy.wait(tiempo)
  })
  Cypress.Commands.add('Validar_campo_dos', (selector,men,nombre_campo,t) => { 
    let tiempo=t
    cy.get(selector).should("be.visible").should("contain",men).then((val)=>{
            cy.log("#########################")
            cy.log("El "+ nombre_campo + " no es valido")
            cy.log("#########################")  
    })
    cy.wait(tiempo)
  })
  Cypress.Commands.add('Validar_campo_dos_xpath', (selector,men,nombre_campo,t) => { 
    let tiempo=t
    cy.xpath(selector).should("be.visible").should("contain",men).then((val)=>{
            cy.log("#########################")
            cy.log("El "+ nombre_campo + " no es valido")
            cy.log("#########################")  
    })
    cy.wait(tiempo)
  })
  //funciones por conjunto o completas
  //crando funcion ToolsQA
  Cypress.Commands.add('Bloque_ToolsQA', (name,email,dir1,dir2,t) => { 
    let tiempo=t
    cy.get("#userName").should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get("#userEmail").should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get("#currentAddress").should('be.visible').type(dir1)
    cy.wait(tiempo)
    cy.get("#permanentAddress").should('be.visible').type(dir2)
    cy.wait(tiempo)
    cy.get("#submit").should('be.visible').click({force:true})
    cy.wait(tiempo)
  })
  Cypress.Commands.add('Bloque_TestingQaRvn', (name,second_name,email,fone,dir,t) => { 
    let tiempo=t
    cy.get("#wsf-1-field-95").should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-96").should('be.visible').type(second_name)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-97").should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-98").should('be.visible').type(fone)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-99").should('be.visible').type(dir)
    cy.wait(tiempo)
    cy.xpath("//label[@id='wsf-1-label-100-row-1']").click()
    cy.wait(tiempo)
    cy.xpath("//label[@for='wsf-1-field-101-row-3']").click()
    cy.wait(tiempo)
    cy.get("#wsf-1-field-102").select("Mac")
    cy.wait(tiempo)
    cy.get("#wsf-1-field-105").select("Mavericks")
    cy.wait(tiempo)
    cy.get("#wsf-1-field-106").click().then(()=>{
            cy.xpath("(//div[contains(.,'9')])[64]").click({force:true})  
        })
    cy.wait(tiempo)
    cy.get("#wsf-1-field-107").click().then(()=>{
            cy.xpath("(//div[contains(.,'9')])[135]").click({force:true})  
        })
    cy.wait(tiempo)
    const ruta='img2.png'
    cy.get("[type='file']").attachFile(ruta)
    cy.wait(tiempo)
    cy.get("#wsf-1-field-109").should('be.visible').click({force:true})
    cy.wait(tiempo)
    /*.then(()=>{
        
        cy.xpath("//*[@id='post-397']/div/div/div/div/div[2]/div/div/div/div/div").should("have.text",'Gracias por tu encuesta.\n')
        //cy.get("#wsf-1-invalid-feedback-97").should("have.text",'Please provide a valid email.')   
    
    })*/
    
    
    
  })
