///<reference types='Cypress' />

require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload'
import ProyectoUno_Po from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO'

describe('Page objects Models', ()=>{
    const master=new ProyectoUno_Po();
    master.visitHome();
    it('Test seccion Uno',()=>{
        master.SeccionUno("C","Olmos","carlos@gmail.com",1000)
        cy.get("#wsf-1-field-109").click()
        cy.Validar_campo_dos_xpath("//div[@id='wsf-1-invalid-feedback-95']","Minimum character count: 4","Nombre",1000)
        })
    it('Test seccion Dos',()=>{
            master.SeccionDos("72223312","Villa Granado",1000)
            
        })
    it('Test seccion Tres',()=>{
            master.SeccionTres(1000)
            
        })
    it('Test seccion Cuatro',()=>{
            cy.reload()
            master.SeccionUno("Carlos","Olmos","carlos@gmail.com",1000)
            master.SeccionDos("72223312","Villa Granado",1000)
            master.SeccionTres(1000)
        })

})