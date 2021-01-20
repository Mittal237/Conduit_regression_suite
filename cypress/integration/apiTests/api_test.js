describe("API tests", () => {
  it("should be able to get articles", () => {
    cy.request("GET", "http://localhost:3000/api/articles").then((response) => {
      expect(response.body).to.not.be.null;
    });
  });
  it("should be able to login", () => {
    cy.request("POST", "http://localhost:3000/api/users/login", {
      user: { email: "mittal161195@gmail.com", password: "mittalpatel" },
    })
      .its("status")
      .should("equal", 200);
  });
});
