// cypress/tests/api/api-users.spec.ts

context("GET /users", () => {
  it("gets a list of users", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('per_page',6)
    })
  })
})
