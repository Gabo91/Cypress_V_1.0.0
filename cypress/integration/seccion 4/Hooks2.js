///<reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'


describe('Hooks Ejemplos', ()=>{
    let tiempo=1000    
        before(()=>{
           
            cy.visit('https://demoqa.com/checkbox')
            cy.title('').should('eq','ToolsQA')
            cy.wait(tiempo)

            cy.get('.rct-collapse > .rct-icon').should('be.visible').click()
            cy.wait(tiempo)
            
         })  
        it('test uno',()=>{
              cy.get(".rct-node-expanded > :nth-child(1) > label > .rct-checkbox").should("be.visible").click()
              cy.wait(tiempo)
        })

        it('test dos',()=>{
            cy.get(".rct-node-expanded > :nth-child(1) > label > .rct-checkbox").should("be.visible").click()
            cy.wait(tiempo)
        })
        it('test tres',()=>{
            cy.get("#tree-node > ol > li > ol").each(($el,index,$list)=>{
                cy.log($el.text())
            })
            cy.wait(tiempo)
            
            for(let i=1;i<=3;i++){
                cy.get(".rct-checkbox").eq(i).click()
                cy.wait(tiempo)
            }
        })
        it('test cuatro',()=>{
            const datos =[];
            cy.get(".rct-checkbox").each(($el,index,$list)=>{
                datos[index]=$el.text()
                cy.log(datos.length)
                
            }).then(()=>{
                for(let i=1;i<datos.length;i++){
                    cy.get(".rct-checkbox").eq(i).click()
                    cy.wait(tiempo)
                }
            })
            
        })
           

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          }) 
    })
        
