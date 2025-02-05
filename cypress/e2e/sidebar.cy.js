describe('Sidebar Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Adjust the URL to where the Sidebar is rendered
  });

  it('should display the profile section with avatar, name, and membership date', () => {
    cy.get('.sidebar .profile').should('exist');
    cy.get('.sidebar .profile img').should('have.attr', 'src').and('include', '/profile-pic.jpg');
    cy.get('.sidebar h3').contains('John Doe');
    cy.get('.sidebar p').contains('Member since 12/31/2023');
  });

  it('should display the favorites section with the list of companies', () => {
    cy.get('.sidebar .favorites').should('exist');
    cy.get('.sidebar .favorites ul').should('have.length', 1); // Ensures only 1 <ul> inside the favorites section
    cy.get('.sidebar .favorites ul li').should('have.length', 6); // Check if there are 6 list items in the correct <ul>
    cy.get('.sidebar .favorites ul li').eq(0).contains('Apple Inc. ⭐');
    cy.get('.sidebar .favorites ul li').eq(1).contains('Microsoft ⭐');
    cy.get('.sidebar .favorites ul li').eq(3).contains('Amazon ⭐');
  });

  it('should display the chat history section', () => {
    cy.get('.sidebar .chat-history').should('exist');
    cy.get('.sidebar .chat-history').find('div').should('have.class', 'chat-history');
  });
});
