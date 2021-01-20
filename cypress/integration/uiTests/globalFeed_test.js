describe("UI integration tests", () => {
  before(() => {
    const email = "admin@gmail.com";
    const password = "admin";
    cy.visit("/");
    cy.login(email, password);
    cy.fixture("articles").then((article) => {
      cy.intercept(("GET", "http://localhost:3000/api/articles"), article).as(
        "getArticles"
      );
    });
  });

  it("should be able to render articles on global feed", () => {
    cy.get(".feed-toggle > .nav > :nth-child(2) > .nav-link").click();
    cy.wait("@getArticles").then(({ response }) => {
      const article = response.body.articles;
      expect(article).to.have.length(10);
      expect(article[0]).to.have.any.keys("title");
    });
  });
});
