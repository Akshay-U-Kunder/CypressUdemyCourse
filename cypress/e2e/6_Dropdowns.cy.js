describe("Dropdown Test Suite", () => {
  it("Static Dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get("#dropdown-class-example")
      .select("option2")
      .should("have.value", "option2")
  })

  it("Dynamic Dropdown", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get("#autocomplete").type("ind")
    cy.get(".ui-menu-item div").each(($el, index, $list) => {
      if ($el.text() === "India") {
        $el.click()
      }
    })

    cy.get("#autocomplete").should("have.value", "India")
  })
})
