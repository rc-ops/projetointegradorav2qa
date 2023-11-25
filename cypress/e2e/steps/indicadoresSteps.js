import { Given, When, Then, Before, And } from 'cypress-cucumber-preprocessor/steps';
import { indicadoresPage } from '../pages/indicadoresPage';

// Before(()=>{
//     cy.visit('https://www.ibge.gov.br/indicadores')
// })

Given('Que eu esteja na página dos indicadores', () => {
    indicadoresPage.accessPaginaIndicadores();
})

When('Eu olhar o valor da inflação IPCA Mensal abaixo do icone', () => {
    indicadoresPage.extraiValorIcone(':nth-child(1) > .indicador-value')
})

And('Comparar com o valor IPCA da tabela', () => {
    indicadoresPage.extraiValorTabela('#indicador-ipca > .ultimo');
})

Then('Os valores devem ser iguais', () => {
    indicadoresPage.comparaValoresExtraidos();
})

When('Eu olhar o valor da inflação INPC abaixo do icone', () => {
    indicadoresPage.extraiValorIcone(':nth-child(2) > .indicador-value');
});

And('Comparar com o valor INPC da tabela', () => {
    indicadoresPage.extraiValorTabela('#indicador-inpc > .ultimo');
})

When('Eu olhar a variação do PIB abaixo do icone', () => {
    indicadoresPage.extraiValorIcone('[style="order: 3"] > .indicador-value');
})

And('Comparar com o valor do PIB da tabela', () => {
    indicadoresPage.extraiValorTabela('#indicador-variacao-do-pib > .dozemeses');
})

When('Eu olhar a taxa de desemprego abaixo do icone', () => {
    indicadoresPage.extraiValorIcone('[style="order: 4"] > .indicador-value');
})

And('Comparar com o valor de desemprego da tabela', () => {
    indicadoresPage.extraiValorTabela('#indicador-desemprego > .ultimo')
})
