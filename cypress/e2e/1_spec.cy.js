describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    cy.get(".search-keyword").type("ca")

    cy.get(".product").should("have.length", 5)
    cy.get(".product:visible").should("have.length", 4)

    //Parent Child chaining
    cy.get(".products").find(".product").should("have.length", 4)

    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click()

    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text()
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click()
        }
      })
    cy.get(".brand").then((logoelement) => {
      cy.log(logoelement.text())
    })
  })
})
