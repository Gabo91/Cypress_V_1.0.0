///<reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'


describe('Reto custom', ()=>{
    let tiempo=200
beforeEach(()=>{
        cy.visit('https://testingqarvn.com.es/campos-requeridos/')
        cy.title('').should('eq','Campos Requeridos | TestingQaRvn')
        cy.wait(tiempo)
})
    it('Validacion de formulario',()=>{
        cy.Bloque_TestingQaRvn("Harold","Mejia","harold.mejia@encora.com","4431123312","Villa Granado",tiempo)
        cy.xpath("//*[@id='post-397']/div/div/div/div/div[2]/div/div/div/div/div").should("have.text",'Gracias por tu encuesta.\n')
        })
    it.only('Validando email',()=>{
            cy.Bloque_TestingQaRvn("Harold","Mejia","harold.mejia","4431123312","Villa Granado",tiempo)
            //cy.get("#wsf-1-invalid-feedback-97").should("have.text",'Please provide a valid email.')
            /*cy.get("#wsf-1-invalid-feedback-97").should("be.visible").then((val)=>{
                let dato=val.text()
                let mensaje="Please provide a valid email."  
                cy.log(dato)
                expect(dato).to.equal(mensaje)
                if(dato==mensaje){
                    cy.log("#########################")
                    cy.log("El email no es valido")
                    cy.log("#########################")
                }
            })*/
            cy.Validar_campo("#wsf-1-invalid-feedback-97","Please provide a valid email.","Email",tiempo)
            cy.Validar_campo_dos("#wsf-1-invalid-feedback-97","Please provide a valid email.","Email",tiempo)
           
         })
    it.only('Validando el campo nombre',()=>{
        cy.Bloque_TestingQaRvn("H","Mejia","harold.mejia@encora.com","4431123312","Villa Granado",tiempo)
           
            cy.Validar_campo("#wsf-1-invalid-feedback-95","Minimum character count: 4","Nombre",tiempo)
           
    })
   
})