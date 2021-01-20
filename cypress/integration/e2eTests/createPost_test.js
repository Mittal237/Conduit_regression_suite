describe("Create new post", () => {
  before(() => {
    cy.visit("/");
    cy.login("admin@gmail.com", "admin");
  });
  it("should write a post and comment on it", () => {
    cy.get('a[href*="/editor"]').click();
    cy.get('input[placeholder="Article Title"]').type("My Title");
    cy.get('input[placeholder="What\'s this article about?"]').type("About X");
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type(
      "This is important"
    );
    cy.get('input[placeholder="Enter tags"]').type("test");
    cy.get('button[type="button"]').click();
    cy.url("/").should("include", "/article/my-title");
    cy.get('textarea[placeholder="Write a comment..."]').type("great post ");
    cy.get('button[type="submit"]').click();
  });
});
