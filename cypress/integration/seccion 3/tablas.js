///<reference types="Cypress" />

 //para que funcionen los comandos
describe("Elementos de una tabla", ()=>{
    it("CHINDREN",()=>{
       cy.visit("https://mdbootstrap.com/docs/b4/jquery/components/button-group/") 
       cy.get(".btn-group").children('[type="button"]').contains("Left").click()
    })
    it("selecionar por medio del elemento eq",()=>{
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/components/button-group/") 
      cy.get('[type="button"]').eq(1).should('contain','Middle').click()
   })
   it("selecionar por filter",()=>{
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/components/button-group/") 
      cy.get('[type="button"]').filter(".btn-primary").should("contain","Left").contains("Left").click()
   })
   it("selecionar por find",()=>{
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/components/button-group/") 
      cy.get('.btn-group').find(".btn-primary").should("contain","Left").contains("Left").click()
   })
   it("selecionar por el primer elemento",()=>{
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/components/button-group/") 
      cy.get('.btn-group [type="button"]').first().should("contain","Left").click()
      cy.get(".btn-group").find("[type='button']").last().click()
      cy.get('.btn-group [type="button"]').last().click()
      
   })
   it("selecionar por el todos elementos NEXTALL",()=>{
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/components/button-group/") 
      cy.get("[type='button']").should("contain","Left").contains("Left").nextAll().should("have.length",2)
      cy.get("[type='button']").nextAll().should("have.length",71)
      
   })
   it("selecionar por el todos elementos Padre",()=>{
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/components/button-group/") 
      cy.get("[type='button']").parent(".btn-group").should("have.class","btn-group")
      //ejemplo que no tengo la pagina
      /*
      for(let  x=1; x=<4;x++){
         cy.get("[type='button']").eq(x).should("contain","All").click({force:true})
         Selecionamos todos los elementos de los check para cagar
         cy.get("[type='checkbox']").check({force:true})
         }
         */
   })
   it("selecionar por medio del elemento eq con for",()=>{
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/components/button-group/") 
      for (let index = 0; index <=3; index++) {
         cy.get('[type="button"]').eq(index).click()
         
      }
      
   })
   it("selecionar por medio del elemento eq con for con validacion",()=>{
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/components/button-group/") 
         for (let index = 0; index <=3; index++) {
            let nombre_boton=""
            if(index==0 || index==1){
               nombre_boton="Left"
            } 
            if(index==2){
               nombre_boton="Middle"
            }
            if(index==3){
               nombre_boton="Right"
            }
            cy.get('[type="button"]').eq(index).should("contain",nombre_boton).click()
            
         }
      
   })
   it("selecionar por medio del elemento eq con for con validacion",()=>{
      cy.visit("https://mdbootstrap.com/docs/b4/jquery/tables/basic/") 
        
        const datos=[]
        let cantidad_odd=0
        cy.get("#table-head-options > section.section-no-border > section > div > table:nth-child(1) > tbody tr td")
        .each(($el,index,$list)=>{
        datos[index]=$el.text()
        }).then(()=>{
           for(let i=0;i<=datos.length;i++){
              cy.log(datos[i])
              //la suma de datos
              if(Number(datos[i])){
                 cantidad_odd=cantidad_odd+Number(datos[i]);
              }
           }
           cy.log("la cantidad total es:"+ cantidad_odd)
           expect(cantidad_odd).eq(0)
        }) 
         
        
   })
      it("selecionar valor de iun campo en especifico",()=>{
         cy.visit("https://mdbootstrap.com/docs/b4/jquery/tables/basic/") 
         
         const campo=cy.get("#striped-rows > section.section-no-border > section > div > table > tbody > tr:nth-child(1) > td:nth-child(2)")
         //cy.log(campo)
         campo.each(($el,index,$list)=>{
            const dato=$el.text()
            cy.log(dato)
            if(dato.includes("Mark")){
               campo.eq(index).next().next().then((age)=>{
                  const Edad =age.text()
                  cy.log(Edad)
                  cy.log("La edad de Javascript Developer es:" + Edad)
                  expect(Edad).eq("@mdo")
               })
            }
         })
            
         
         
      })
      it("selecionar multiples checkbox en diferentes tablas",()=>{
         cy.visit("https://mdbootstrap.com/docs/b4/jquery/tables/basic/") 
         
          /*
            for(let x=1;x<=6;x++){
               cy.get("").should().click()
               cy.get("").should().click({multiple:true},{force:true})
            }
         */
      
      })
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    })//cierre de describe