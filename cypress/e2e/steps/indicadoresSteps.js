import { Given, When, Then, Before, And } from 'cypress-cucumber-preprocessor/steps';
import { indicadoresPage } from '../pages/indicadoresPage';

// Before(()=>{
//     cy.visit('https://www.ibge.gov.br/indicadores')
// })

Given('Que eu esteja na página dos indicadores', () => {
    indicadoresPage.accessPaginaIndicadores();
})

When('Eu olhar o valor da inflação IPCA Mensal abaixo do icone', () => {
    indicadoresPage.extraiInflacaoIpcaIcone();
})

And('Comparar com o valor IPCA da tabela', () => {
    indicadoresPage.extraiInflacaoIpcaTabela();
})

Then('Os valores devem ser iguais', () => {
    indicadoresPage.comparaValoresExtraidos();
})

When('Eu olhar o valor da inflação INPC abaixo do icone', () => {
    indicadoresPage.extraiInflacaoInpcIcone();
});

And('Comparar com o valor INPC da tabela', () => {
    indicadoresPage.extraiInflacaoInpcTabela();
})

When('Eu olhar a variação do PIB abaixo do icone', () => {
    indicadoresPage.extraiVariacaoPibIcone();
})

And('Comparar com o valor do PIB da tabela', () => {
    indicadoresPage.extraiVariacaoPibTabela();
})
