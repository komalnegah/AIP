describe("Chatbot Test", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("should check if the input box exists", () => {
      cy.get("input[type='text']").should("exist");
    });
  
    it("should check if the send button exists", () => {
      cy.get("button[type='submit']").should("exist");
    });
  
    it("should type a question and display a response", () => {
      // Match correct API request URL (update if needed)
      cy.intercept("POST", "**/chatbot*").as("chatbotResponse");
  
      cy.get("input[type='text']")
        .should("exist")
        .type("What was the average sales of Amazon in the year 2015?");
  
      cy.get("button[type='submit']").click({ force: true });
  
      // Wait for chatbot API response (increase timeout if needed)
      cy.wait("@chatbotResponse", { timeout: 10000 });
  
      // Wait a bit to ensure response loads
      cy.wait(5000);
  
      // Check if bot response appears
      cy.get(".bot-response", { timeout: 50000 })
        .should("exist")
        .should("not.be.empty");
    });
  });
  