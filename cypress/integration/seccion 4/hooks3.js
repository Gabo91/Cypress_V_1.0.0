///<reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'


describe('Reto Hooks', ()=>{
        let tiempo=2000
beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title('').should('eq','OrangeHRM')
        cy.wait(tiempo)
        cy.get('#txtUsername').should('be.visible').type('Admin')
        cy.wait(tiempo)
        cy.get('#txtPassword').should('be.visible').type('admin123')
        cy.wait(tiempo)
        cy.get('#btnLogin').should('be.visible').click()
        cy.wait(tiempo)
        })
        after(() => {
                cy.get('#welcome').should('be.visible').click()
                cy.wait(tiempo)
                cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').should('be.visible').click()
                cy.wait(tiempo)
            })
        it('Test 1',()=>{
              cy.get('#menu_admin_viewAdminModule > b').should('be.visible').click()
              cy.wait(tiempo)          
        })
        it('Test 2',()=>{
                cy.get('#menu_pim_viewPimModule > b').should('be.visible').click()
                cy.wait(tiempo)
                        
        })
        it('Test 3',()=>{
                cy.get('#menu_leave_viewLeaveModule > b').should('be.visible').click()
                cy.wait(tiempo)
                        
        })
})