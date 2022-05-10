///<reference types="Cypress" />
 //para que funcionen los comandos
 require('cypress-plugin-tab')
 require('cypress-xpath')
describe(" campos de tipo fecha", ()=>{
    it.only("Fecha uno",()=>{
       cy.visit("https://testingqarvn.com.es/calendarios/") 
       cy.get("#wsf-1-field-78").should("be.visible").type("03/04/2022").then(()=>{
         // cy.get("#wsf-1-field-78").type('{esc}')
         cy.get("#wsf-1-field-78").tab()
       })
       //otra obcion cuando quieres agarrar el elemento que sale en las fechas
       //cy.get(". today").first().click({force:true})
       })
       it("rango de fechas",()=>{
         cy.visit("https://demo.mobiscroll.com/range/date-time-range") 
         cy.get("#mbsc-segmented-6")
         cy.get("#demo-static-date-time-range-cal > div.mbsc-datepicker-tab-wrapper.mbsc-flex-1-1.mbsc-ios > div.mbsc-datepicker-tab.mbsc-datepicker-tab-calendar.mbsc-ios.mbsc-datepicker-tab-active > div > div > div.mbsc-calendar-header.mbsc-ios > div > div > button").click()
         cy.get("#demo-static-date-time-range-cal > div.mbsc-datepicker-tab-wrapper.mbsc-flex-1-1.mbsc-ios > div.mbsc-datepicker-tab.mbsc-datepicker-tab-calendar.mbsc-ios.mbsc-datepicker-tab-active > div > div > div.mbsc-calendar-body.mbsc-flex-col.mbsc-flex-1-1.mbsc-ios > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(3) > div > div").click()
         cy.get("#demo-static-date-time-range-cal > div.mbsc-datepicker-tab-wrapper.mbsc-flex-1-1.mbsc-ios > div.mbsc-datepicker-tab.mbsc-datepicker-tab-calendar.mbsc-ios.mbsc-datepicker-tab-active > div > div > div.mbsc-calendar-body.mbsc-flex-col.mbsc-flex-1-1.mbsc-ios > div > div:nth-child(2) > div > div > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(3)").contains("Mar").click()
         cy.xpath("(//div[@class='mbsc-calendar-cell-text mbsc-calendar-day-text mbsc-ios'][contains(.,'26')])[3]").click().then(()=>{
            cy.get("#mbsc-segmented-7").click()
         })
       }) 
   
    })//cierre de describe