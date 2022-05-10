///<reference types="Cypress" />

 //para que funcionen los comandos
describe("reto seuma", ()=>{
   it("Reto Asserts",()=>{
      let tiempo=1500
      cy.visit("https://testsheepnz.github.io/BasicCalculator.html") 
      cy.wait(tiempo)
      let a=26
      let b=20
      cy.get("#number1Field").should("be.visible").type(a)
      cy.get("#number2Field").should("be.visible").type(b)
      cy.wait(tiempo)
      
      //cy.contains("[type='button']","[value='Calculate']").should("be.visible").click()
      cy.get("#calculateButton").should("be.visible").click()
      // codigo para obtener el valor de un elemento de tipo textbox
     /* cy.get('#numberAnswerField')
         .invoke('val')
            .then(sometext => cy.log(sometext));*/
            cy.get('#numberAnswerField')
            .invoke('val')
               .then(sometext => {
                  cy.log(sometext)
                 /* let num_max=sometext
                  if(num_max>20){
                     cy.log("El numero es mayor a 20")
                  } else{
                     cy.log("El numero es menor a 20")
                  }*/
                  let aux=sometext
                  if(aux>50){
                     a=a-15
                     b=b-10
                     cy.get("#number1Field").should("be.visible").clear().type(a)
                     cy.get("#number2Field").should("be.visible").clear().type(b)
                     cy.wait(tiempo)
                     cy.get("#calculateButton").should("be.visible").click()
                  }else{
                     a=a+10
                     b=b+15
                     cy.get("#number1Field").should("be.visible").clear().type(a)
                     cy.get("#number2Field").should("be.visible").clear().type(b)
                     cy.wait(tiempo)
                     cy.get("#calculateButton").should("be.visible").click()
                  }

               })  
      
      })
      it("Asert invoke",()=>{
         let tiempo=1500
         cy.visit("https://testsheepnz.github.io/BasicCalculator.html") 
         cy.wait(tiempo)
         let a=26
         let b=25
         cy.get("#number1Field").should("be.visible").type(a)
         cy.get("#number2Field").should("be.visible").type(b)
         cy.wait(tiempo)
         
         //cy.contains("[type='button']","[value='Calculate']").should("be.visible").click()
         cy.get("#calculateButton").should("be.visible").click()
         // codigo para obtener el valor de un elemento de tipo textbox
        /* cy.get('#numberAnswerField')
            .invoke('val')
               .then(sometext => cy.log(sometext));*/
               cy.get('#numberAnswerField')
               .invoke('val')
                  .then(sometext => {
                     cy.log(sometext)
                    /* let num_max=sometext
                     if(num_max>20){
                        cy.log("El numero es mayor a 20")
                     } else{
                        cy.log("El numero es menor a 20")
                     }*/
                     let aux=sometext
                     if(aux>50){
                        a=a-15
                        b=b-10
                        //invoce("attr","placeholder"),should("contai","enter value")
                        cy.get("#number1Field").invoke("val").then((x)=>{
                        cy.get("#number1Field").clear().type(a)
                        //con el attr style podemos cambiar el color
                        cy.get("#number1Field").invoke("attr","style","color:blue")

                        })
                        cy.get("#number2Field").should("be.visible").clear().type(b)
                        cy.get("#number2Field").invoke("attr","style","color:yellow")
                        cy.wait(tiempo)
                        cy.get("#calculateButton").should("be.visible").click()
                        cy.get('#numberAnswerField').invoke("attr","style","color:red")
                     }else{
                        a=a+10
                        b=b+15
                        cy.get("#number1Field").should("be.visible").clear().type(a)
                        cy.get("#number2Field").should("be.visible").clear().type(b)
                        cy.wait(tiempo)
                        cy.get("#calculateButton").should("be.visible").click()
                     }
   
                  })  
         
         })
         
   Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    }) 
    
    
    })//cierre de describe