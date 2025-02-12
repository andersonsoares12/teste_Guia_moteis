

describe('template spec', () => {
  beforeEach(() => {
    // Configura o viewport antes de cada teste utilizo essa configuração para melhor visualicação do teste no meu macbook 15 air
    cy.viewport(1366, 768);
  });
  it('Cadastro com Preencher o formulário corretamente e enviar → Deve exibir mensagem de sucesso.', () => {
    cy.visit('https://www.guiademoteis.com.br/usuario/cadastro')
    
    cy.get('.btn-accept').click()
    cy.get('#Nome').type('Anderson')
    cy.get('#sexo-Masculino').click()
    cy.get('#DataNascimento').type('01/08/1990')
    cy.get('#Cep').type('71880000')
    cy.get('#Email').type('anderson7@gmail.com')
    cy.get('#ConfEmail').type('anderson7@gmail.com')
    cy.get('#Senha').type('@Jacare1979')
    cy.get('#checkbox-descontos-email').click()
    cy.get('#checkbox-publicidade-email').click()
    cy.get('#checkbox-privacy').click()
    cy.get('.btCadastrar').click()
    cy.contains('p', 'Tudo Ok! Seu cadastro VIP Guia de Motéis foi concluido com sucesso.').should('exist')
    cy.screenshot('Cadastro com sucesso');
  })

  it('Deixar campos obrigatórios vazios → Deve exibir mensagens de erro.', () => {
    
    cy.visit('https://www.guiademoteis.com.br/usuario/cadastro')
    cy.get('.btn-accept').click()
 
    cy.get('.btCadastrar').click()
    cy.wait(1000)
    cy.screenshot('Campos obrigatórios vazios.')
  });

  //// este teste foi feito encima do proprio site do guia de moteis, mas o mesmo não está funcionando para testes com caractres ate 8 digitos, e sim ate 4 caracteres.
  it('Digitar uma senha fraca (exemplo: "12345") → Deve exibir erro de validação.', () => {
    
    cy.visit('https://www.guiademoteis.com.br/usuario/cadastro')
    cy.get('.btn-accept').click()
    cy.get('#Nome').type('Anderson')
    cy.get('#sexo-Masculino').click()
    cy.get('#DataNascimento').type('01/08/1990')
    cy.get('#Cep').type('71880539')
    cy.get('#Email').type('anderson3@gmail.com')
    cy.get('#ConfEmail').type('anderson@gmail.com')
    cy.get('#Senha').type('@')
    cy.get('#checkbox-descontos-email').click()
    cy.get('#checkbox-publicidade-email').click()
    cy.get('#checkbox-privacy').click()
    cy.get('.btCadastrar').click()
    cy.wait(1000)
 
    cy.get('#qtip-1-content').screenshot('senha deve conter 4 ou mais caracteres.', {
      padding: [20, 20, 20, 800]})  // padding em pixels: [cima, direita, baixo, esquerda]
  });


  it('Digitar e-mails diferentes nos campos de "E-mail" e "Confirmação de E-mail" → Deve exibir erro.', () => {
    
    cy.visit('https://www.guiademoteis.com.br/usuario/cadastro')
    cy.get('.btn-accept').click()
    cy.get('#Nome').type('Anderson')
    cy.get('#sexo-Masculino').click()
    cy.get('#DataNascimento').type('01/08/1990')
    cy.get('#Cep').type('71880539')
    cy.get('#Email').type('anderson3@gmail.com')
    cy.get('#ConfEmail').type('anderson@gmail.com')
    cy.get('#Senha').type('@Jacare1979')
    cy.get('#checkbox-descontos-email').click()
    cy.get('#checkbox-publicidade-email').click()
    cy.get('#checkbox-privacy').click()
    cy.get('.btCadastrar').click()
    cy.wait(1000)
    cy.get('#qtip-0-content').screenshot('email diferente.', {
      padding: [100, 20, 20, 800]})  // padding em pixels: [cima, direita, baixo, esquerda]
  });

})
