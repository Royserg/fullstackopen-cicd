/// <reference types="cypress" />

describe('Pokedex', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open the front page without errors', () => {
    cy.contains('ivysaur');
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    );
  });

  it('should navigate to pokemon page', () => {
    cy.contains('charizard');
    cy.get('[href="/pokemon/charizard"]').click();

    cy.url().should('contain', '/pokemon/charizard');
    cy.contains('blaze');
  });
});
