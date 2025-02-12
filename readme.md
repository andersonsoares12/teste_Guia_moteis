###Passos para configurar e gerar relatórios com cypress-mochawesome-reporter:

1. **Instalar o plugin:** Primeiro, você precisa instalar o plugin cypress-mochawesome-reporter e suas dependências:
    - npm i -D cypress-mochawesome-reporter cypress-multi-reporters mocha-junit-reporter

2. **Rodar o comando para gerar o  Relatorio esse teste de UI**
    - cypress run --browser chrome 
    - os relatórios sao gerados na pasta reports

3. **Teste de API com k6 e jest + superteste**
    * entrar na pasta test e executar o comando para teste do K6: **k6 run load-test.js**
    * comando para tester o Jest: **npx jest**   
    * Jest:
        - Instalar jest-html-reporter.: npm install --save-dev jest-html-reporter
        - Configurar Jest para Usar o Reporter: Adicione a configuração do jest-html-reporter ao seu arquivo jest.config.js:

<!-- javascript
module.exports = {
  testEnvironment: 'node',
  reporters: [
    'default',
    ['jest-html-reporter', {
      outputPath: 'reports/test-report.html',
      pageTitle: 'Test Report'
    }]
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)',
  ],
}; -->

        - Configurar jest para usar o repórter.

        - Executar os testes e encontrar o relatório em HTML.

    * k6:

        - Executar o teste de carga e gerar um relatório JSON.  : npm install -g k6-reporter
        - Converter o JSON em HTML: Após executar o teste com k6 e gerar um arquivo JSON, converta-o em HTML, comandos:
        - k6 run --out json=output.json load-test.js
        - o relatório esta em summary.html