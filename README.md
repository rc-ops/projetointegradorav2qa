# Projeto disciplina QA
## Definição do Projeto
- **Objetivo**: Automatizar testes em um site governamental brasileiro para garantir a funcionalidade correta de determinados cenários.
- **Sites Governamentais de exemplo**: Escolha um site governamental adequado para os testes. Por exemplo, você pode considerar o Portal de Transparência de um governo estadual ou municipal.

- Você pode acessar os seguintes domínios gerais e procurar os sites específicos de interesse:
	- **Portal do Governo Brasileiro:**
		- https://www.gov.br
	- **Receita Federal do Brasil:**
		- https://www.gov.br/receitafederal
	- **Instituto Brasileiro de Geografia e Estatística (IBGE):**
		- https://www.ibge.gov.br
	- **Tribunal de Contas da União (TCU):**
		- https://www.tcu.gov.br
	- **Portal da Transparência:**
		- O Portal da Transparência é geralmente mantido por governos estaduais e municipais, e os URLs podem variar. Recomendo procurar pelos portais de transparência específicos de cada entidade governamental.
## Estrutura do Projeto
- Já utilizando a estrutura do Cypress 13, crie os casos utilizando pageObjects.
- A utilização de fixtures é opcional.
- Lembrando de seguir a estrutura básica da automação UI:
	- Capturar elemento  → Ação → Resultado

- **Estrutura dos diretórios**
```
    |- cypress/
      |- e2e/
        |- features/
          |- login.feature
          |- consultaDados.feature
          |- ... (outros cenários em Gherkin)
		|- steps/
			  |- loginSteps.js
			  |- consultaDadosSteps.js
			  |- ... (outros steps dos cenários)
      |- fixtures/
        |- exemplo.json
        |- ... (outros arquivos de apoio aos cenários)
      |- pages/
        |- login.page.js
		|- consultaDados.page.js
        |- ... (outros arquivos pages dos cenários)
      |- support/
        |- commands.js
        |- e2e.js
```

## Iniciando o projeto com Node.js e Cypress
- Criar o projeto node (package.json): `npm init –y`
- Instalar o Cypress (na pasta do projeto): `npm install cypress –D`
- Para configurar o cucumber no cypress 13, acesse
	- https://kailash-pathak.medium.com/cypress-13-integration-with-bdd-cucumber-pom-a367f534b363
	
## Escrevendo cenários em Gherkin
- Em cada arquivo `.feature` dentro da pasta `features`, escreva cenários em Gherkin. Exemplo
	- **login.feature**)
		```gherkin
			Feature: Login Functionality

			Scenario: User logs in with valid credentials
			  Given the user is on the login page
			  When the user enters valid username and password
			  Then the user should be logged in successfully

			Scenario: User receives an error with invalid credentials
			  Given the user is on the login page
			  When the user enters invalid username and password
			  Then the user should see an error message
		```

## Implementação dos Steps (passos)
- Dentro da pasta `steps`, implemente os passos definidos nos cenários. Exemplo 
	- **login.page.js**
```js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

    Given('the user is on the login page', () => {
      // Cypress code to navigate to the login page
    });

    When('the user enters valid username and password', () => {
      // Cypress code to enter valid credentials
    });

    Then('the user should be logged in successfully', () => {
      // Cypress code to assert successful login
    });

    When('the user enters invalid username and password', () => {
      // Cypress code to enter invalid credentials
    });

    Then('the user should see an error message', () => {
      // Cypress code to assert error message
    });
```

## Executando os Testes
- Execute os testes utilizando o comando
	- `npx cypress open`