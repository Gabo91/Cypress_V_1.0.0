///<reference types="Cypress" />
require('cypress-xpath')
 //para que funcionen los comandos
describe("Blucles For y each", ()=>{
    it("for uno",()=>{
       for (let  i= 0; i <=10; i++) {
         cy.log("numero:" + i)
     }
          
    })
    it("for dos",()=>{
      for (let  i= 0; i <=10; i++) {
        let t=5
         cy.log(t +"*"+ i+"="+ t*i)
    }
         
   })
   it("each",()=>{
     
    cy.visit("http://automationpractice.com/index.php")
    cy.get(".product-name").each(($el,index,$list)=>{
    //cy.log($el.text())
    let vestido=$el.text()
    cy.log(vestido)
    })
   })
   it("each dos",()=>{
     
    cy.visit("http://automationpractice.com/index.php")
    cy.get(".product-name").each(($el,index,$list)=>{
    cy.wait(2000)
    let vestido=$el.text()
     if(vestido.includes("Printed Summer Dress")){
       cy.wrap($el).click()
     }
    })
   })
   it.only("reto each",()=>{
     
    cy.visit("http://automationpractice.com/index.php")
      //for (  index=0; index==1;i++){
        /*if(index==1){
          cy.xpath("(//span[contains(.,'More')])[1]").click()  
          cy.get("#quantity_wanted").clear().type("4")
          cy.get(".exclusive > span").click().then(()=>{
            cy.get(".continue > span").click()
            cy.get(".icon-home").click
          })          
    }*/
    const datos =[];
    cy.get("#center_column .product-name").each(($el,index,$list)=>{
      datos[index]=$el.text()
      cy.log(datos.length)
    }).then(()=>{
        for ( let i=0; i<datos.length;i++){
          cy.get("#center_column .product-name").eq(i).click({force:true})
          cy.wait(1500)
          cy.get("#quantity_wanted").clear().type("4")
          cy.get("#group_1").select("L").should("have.value","3")
          cy.get(".exclusive > span").click({force: true}).then(()=>{
            cy.get(".continue > span").click({force: true})
            cy.get(".icon-home").click({force: true})
          })
                    
        } 
      })
    
      /*for ( let i=0; i<=3;i++){
          cy.get("#center_column .product-name").eq(i).click({force:true})
          cy.wait(1500)
          cy.get("#quantity_wanted").clear().type("4")
          cy.get("#group_1").select("L").should("have.value","3")
          cy.get(".exclusive > span").click().then(()=>{
            cy.get(".continue > span").click()
            cy.get(".icon-home").click()
          })
                    
        }*/ 
      })
    })//cierre de describe