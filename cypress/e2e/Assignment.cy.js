const Data = require('../fixtures/assignment.json')
describe('assignment',()=>{
    Data.forEach(JsonData => {
      it('Data driven Testing',()=>{
      
        cy.visit("https://www.lambdatest.com/selenium-playground");
        cy.get(':nth-child(20) > .text-black').click()
        cy.get('#name').type(JsonData.Name)
        cy.get('#inputEmail4').type(JsonData.Email)
        cy.get('#inputPassword4').type(JsonData.Password)
        cy.get('#company').type(JsonData.Company)
        cy.get('#websitename').type(JsonData.Website)
        //cy.get('select').select('Nepal').should('have.value', 'NP')
        cy.get('.loginform').contains('Nepal')
        cy.get('#inputCity').type(JsonData.City)
        cy.get('#inputAddress1').type(JsonData.Address)
        cy.get('#inputAddress2').type(JsonData.Address2)
        cy.get('#inputState').type(JsonData.State)
        cy.get('#inputZip').type(JsonData.ZipCode)
        cy.get('.bg-lambda-900').click() 
        if(JsonData.State=='State1' && JsonData.ZipCode=='1234')
        {
          cy.screenshot("success")
          cy.get('.success-msg').should('have.text',JsonData.expected);
          cy.go('back');
        }
        else 
        {
          cy.screenshot("Failure")
          
        }
        if(JSON.Email=='TEST@.COM'){
          cy.closeTab()
        }
      })
    });
    
  //});
})