/// <reference types="cypress" />
describe.only("Login And Search the data", () => {
  let date = new Date()
  let day = date.getDate();
  let month = date.getMonth()+1;
  let year = date.getFullYear();
  let fromDate = `${month}/${day}/${year}`;
  let toDate = `${month+1}/${day+1}/${year}`;
 
  before(() => {
    cy.visit(
      "https://www.lambdatest.com/selenium-playground/jquery-date-picker-demo"
    );
  })

it("Enter data in From and To Field", () => {
  cy.get('[id="from"]').type(fromDate);
  cy.get('[id="to"]').type(toDate);
});
it("Verify Correct selected value should display", () => {
  cy.get('[id="from"]')
  .invoke('val')
  .then(date => expect(date).to.equal(fromDate));
  cy.get('[id="to"]')
  .invoke('val')
  .then(date => expect(date).to.equal(toDate));

});
});