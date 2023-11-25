class IndicadoresPage {

    /* elements = {
        // Valores abaixo dos ícones
        inflacaoIpcaIcone: () => cy.get(':nth-child(1) > .indicador-value'),
        inflacaoInpcIcone: () => cy.get(':nth-child(2) > .indicador-value'),
        variacaoPibIcone: () => cy.get('[style="order: 3"] > .indicador-value'),
        taxaDesempregoIcone: () => cy.get('[style="order: 4"] > .indicador-value'),

        // Valores das tabelas
        inflacaoIpcaTabela: () => cy.get('#indicador-ipca > .ultimo'),
        inflacaoInpcTabela: () => cy.get('#indicador-inpc > .ultimo'),
        variacaoPibTabela: () => cy.get('#indicador-variacao-do-pib > .dozemeses'),
        taxaDesempregoTabela: () => cy.get('#indicador-desemprego > .ultimo')
    } */


    constructor() {
        this.valor1;
        this.valor2;
    }

    accessPaginaIndicadores() {
        cy.visit('https://www.ibge.gov.br/indicadores')
    }

    extraiValorIcone = (seletor) => {
        cy.get(seletor).then(($v1) => {
            this.valor1 = $v1.text();
        })
        return this.valor1;
    }

    extraiValorTabela = (seletor) => {
        cy.get(seletor).then(($v2) => {
            this.valor2 = $v2.text();
        })
        return this.valor2
    }

    comparaValoresExtraidos() {
        return this.valor1 === this.valor2
    }
}

export const indicadoresPage = new IndicadoresPage()