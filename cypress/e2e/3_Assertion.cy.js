describe("Assertion", () => {
  it("Assertion Test", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    //To Print
    cy.get(".brand").then((logoelement) => {
      cy.log(logoelement.text())
    })

    //assert the text
    cy.get(".brand").should("have.text", "GREENKART")
  })
})
