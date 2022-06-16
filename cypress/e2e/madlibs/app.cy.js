describe("MadLibs Main Page", () => {
  it("loads successfully", () => {
    //ARRANGE
    cy.visit("http://localhost:3000")

    //ASSERT
    cy.get('.App').should("be.visible")
    .within(() => {
      cy.get("input").should("have.length", 8)
      cy.get('#submit-button').should("be.visible").should("contain.text", "SUBMIT").should("be.disabled")
    })
  })

  it("activate the button when form filled", () => {
    const sections = [
      "food",
      "name",
      "adjective",
      "noun",
      "noun2",
      "verb1",
      "verb2",
      "verb3",
    ]

    for (let section of sections) {
      cy.get(`input#${section}`).type("pizza")
    }

    cy.get("#submit-button").should("be.enabled")
  })

  it("show story on button click", () => {
    const story = `It was pizza day at school, and pizza was super pizza for lunch. But when she went outside to eat, a pizza stole her pizza !pizza chased the pizza all over school. She pizza, pizza, and pizza through the playground. Then she tripped on her pizza and the pizza escaped! Luckily, pizza’s friends were willing to share their with her.`.replace(/\n/g, "")
    cy.get('#submit-button').click()

    cy.get("div.result").should("be.visible").should("contain.text", story)
  })
})