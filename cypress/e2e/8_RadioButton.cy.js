describe("Radio Button test Suite", () => {
  it("Radio Button Assertion", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get("[value='radio2']").check().should("be.checked")

    cy.get("[value='radio1']").check().should("be.checked")

    cy.get("[value='radio2']").should("not.be.checked")
  })
})
