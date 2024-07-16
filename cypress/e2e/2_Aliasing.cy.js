describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    cy.get(".search-keyword").type("ca")

    cy.get(".products").as("productsLocator")
    cy.get("@productsLocator").find(".product").should("have.length", 4)

    cy.get("@productsLocator")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click()

    cy.get("@productsLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text()
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click()
        }
      })
  })
})
