/// <reference types = "cypress" />


describe('Funcionalidade Página de produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve selecionar um item da lista', () => {
    cy.get('[class="product-block grid"]')
      // .first()
      // .last()
      // .eq(3)
      .contains('Ajax Full-Zip Sweatshirt')
      .click()
  })

  it('Deve adicionar um produto ao carrinho', () => {
    var quantidade = 3
    cy.get('[class="product-block grid"]')
      .contains('Abominable Hoodie').click()
    cy.wait(2000)
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
  })
});

