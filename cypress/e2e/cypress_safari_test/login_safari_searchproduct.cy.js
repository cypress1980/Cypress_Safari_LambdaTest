/// <reference types="cypress" />
context("Browser is already open ", () => {
  it("User Open the Url", () => {
  cy.visit(
  "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );
  });
  it("Login into the application", () => {
  cy.get('[id="input-email"]').type("lambdatest@yopmail.com");
  cy.get('[id="input-password"]').type("lambdatest");
  cy.get('[type="submit"]').eq(0).click();
  });
  it("Click On All Categories drop down and Search the Product", () => {
  cy.get('[data-toggle="dropdown"]').eq(0).click();
  cy.contains("Laptops").click({ force: true });
  cy.get('[name="search"]').eq(0).type("Apple").should("have.value", "Apple");
  cy.get('[type="submit"]').eq(0).click();
  });
  it("Verify Correct Product with name'iPod Shuffle' should display after Search ", () => {
  cy.contains("iPod Shuffle");
  });
  });
  