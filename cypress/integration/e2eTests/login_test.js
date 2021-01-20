describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should login into an application", () => {
    cy.login("admin@gmail.com", "admin");
  });
});
