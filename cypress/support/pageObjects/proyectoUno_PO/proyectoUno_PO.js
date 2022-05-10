class ProyectoUno_Po{
    visitHome(){
            let tiempo=1000
            before(()=>{
            cy.visit('https://testingqarvn.com.es/campos-requeridos/')
            cy.title('').should('eq','Campos Requeridos | TestingQaRvn')
            cy.wait(tiempo)
        })
        }
    VisitHomeEach(){
        let tiempo=100
        beforeEach(()=>{
            cy.visit('https://testingqarvn.com.es/campos-requeridos/')
            cy.title('').should('eq','Campos Requeridos | TestingQaRvn')
            cy.wait(tiempo)
        })
    }
    SeccionUno(name,second_name,email,t){
        let tiempo=t;
        cy.get("#wsf-1-field-95").should('be.visible').type(name)
        cy.wait(tiempo)
        cy.get("#wsf-1-field-96").should('be.visible').type(second_name)
        cy.wait(tiempo)
        cy.get("#wsf-1-field-97").should('be.visible').type(email)
        cy.wait(tiempo)
    }   
    SeccionDos(fone,dir,t){
        let tiempo=t;
        cy.get("#wsf-1-field-98").should('be.visible').type(fone)
        cy.wait(tiempo)
        cy.get("#wsf-1-field-99").should('be.visible').type(dir)
        cy.wait(tiempo)
    }
    SeccionTres(t){
        let tiempo=t;
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
    }    
    }//final
    export default ProyectoUno_Po;