///<reference types="Cypress" />

require('cypress-xpath')
 //para que funcionen los comandos
describe("Asserts", ()=>{
    it("asserts contains",()=>{
       cy.visit("http://automationpractice.com/index.php") 
       cy.title("My Store").should('eq','My Store')
       cy.wait(1000)
       cy.get("#block_top_menu").contains("Women").click()
    })
    it("Asserts find,eq",()=>{
      cy.visit("http://automationpractice.com/index.php") 
      cy.title("My Store").should('eq','My Store')
      cy.wait(1000)
      cy.get(".product-container").find(".product-image-container").eq(2).click()
   })
   it("reto",()=>{
      cy.visit("http://automationpractice.com/index.php") 
      cy.title("My Store").should('eq','My Store')
      cy.wait(1000)
      cy.get(".product-container").find(".product-image-container").eq(2).click()
      //mi solucion
         /*cy.get("#product_condition").find(".editable").contains("New").then(()=>{
      cy.log("Se valida que el vestido es nuevo")   
      })*/
      // la del docente
      //toma textos de la apgina y validarlos
      cy.get("#product_condition .editable").then((e)=>{
         //cy.log(e.text())
         let estado=e.text()
         //cy.log(estado)
         if(estado=="New"){
            cy.log("El vestido es Nuevo")
         }
      })
      
   })
   it("reto mas yapa",()=>{
      cy.visit("http://automationpractice.com/index.php") 
      cy.title("My Store").should('eq','My Store')
      cy.wait(1000)
      cy.get(".product-container").find(".product-image-container").eq(3).click()
      cy.get("#product_condition .editable").then((e)=>{
         let estado=e.text()
         if(estado=="New"){
            cy.log("El vestido es Nuevo")
         }
      })
      cy.get("#our_price_display").then((e)=>{
         let price= e.text()
         //la funcion slice quita un elemento de la comlunma
         price=price.slice(1,3)
         cy.log(price)
         if(price>30){
            cy.log("El vestido no esta en nuestro presupuesto")
            cy.get(".breadcrumb > [href='http://automationpractice.com/index.php?id_category=3&controller=category']").click()
         }else{cy.log("El vestido esta en nuestro presupuesto")
            cy.get(".exclusive > span").click()
            cy.wait(5000)
         }
      }) 
   })
   it("asserts have contains",()=>{
      cy.visit("https://demoqa.com/text-box") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(1000)
      cy.get("#userName").should("be.visible").type("rodigo")
      cy.get("#userEmail").should("be.visible").type("harold@encora.com")
      cy.get("#submit").should("be.visible").click()
      cy.get("#name").should("have.text","Name:rodigo")
      cy.get("#email").should("contain.text","harold@encora.com")
      //diferencia have text tiene que tener todo lo q encuentra
      //contain.text puede validar una parte del lo que encuentra
   })
   it("asserts have.tesx mas then",()=>{
      cy.visit("https://demoqa.com/text-box") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(1000)
      cy.get("#userName").should("be.visible").type("rodrigo")
      //si el texto tiene algo mas "rodrigoss" pasa por que el containt busca la palabra similar
      /*cy.get("#userName").should("contain.value","rodrigo").then(()=>{
         cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
         cy.get("#submit").click()
      })*/
      // cuando usas el have.value verificar si contiene extactamente el  texto esperado el contain.value no lo hace
      cy.get("#userName").should("have.value","rodrigo").then(()=>{
         cy.get("#userEmail").should("be.visible").type("rodrigo@gmail.com")
         cy.get("#submit").click()
      })
   })
   it("asserts class",()=>{
      cy.visit("https://demoqa.com/text-box") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(1000)
      cy.get("#userName").should("be.visible").should("have.class","mr-sm-2 form-control").then(()=>{
         cy.get("#userName").type("rodrigo")
      })
   })
   it("asserts have.class y la funcion and",()=>{
      //en and valida que tenga ambos parametros
      cy.visit("https://demoqa.com/text-box") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(1000)
      cy.get("#userName").should("be.visible").and("have.class","mr-sm-2 form-control").then(()=>{
         cy.get("#userName").type("rodrigo")
      })
   })
   it("asserts not.have.class y la funcion and",()=>{
      //en and valida que tenga ambos parametros
      cy.visit("https://demoqa.com/text-box") 
      cy.title("ToolsQA").should('eq','ToolsQA')
      cy.wait(1000)
      //nor.be.visible
      cy.get("#userName").should("be.visible").and("not.have.class","mr-sm-2 form-control").then(()=>{
         cy.get("#userName").type("rodrigo")
      })
   })
   it("asserts legth_css y el css",()=>{
      //have.length validas el largo de un objeto
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/tables/pagination/") 
      cy.title("Bootstrap 4 table pagination - examples & tutorial.").should('eq','Bootstrap 4 table pagination - examples & tutorial.')
      cy.wait(1000)
      cy.xpath("#dtBasicExample").should("have.css","padding","30px")
      //cy.xpath("//th[contains(@class,'asc')] >tr").should("have.length",5).and("have.css","padding",".75rem")
   })
   it("asserts contains por inicio",()=>{
      let tiempo=1500
      cy.visit("https://testingqarvn.com.es/contacto-2/") 
      cy.wait(tiempo)
      cy.get("#wsf-1-field-114").should("be.visible").type("Demo del contenido")
      cy.wait(tiempo)
      cy.contains("[type='submit']", "Submit").should("be.visible").click()
   })
   Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    
    })//cierre de describe