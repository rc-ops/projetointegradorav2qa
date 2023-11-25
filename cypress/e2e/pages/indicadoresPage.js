class IndicadoresPage {
    constructor() {
        this.valor1;
        this.valor2;
    }

    accessPaginaIndicadores() {
        cy.visit('https://www.ibge.gov.br/indicadores')
    }

    extraiInflacaoIpcaIcone() {
        cy.get(':nth-child(1) > .indicador-value').then(($v1) => {
            this.valor1 = $v1.text();
        })
        return this.valor1;
    }

    extraiInflacaoIpcaTabela = () => {
        cy.get('#indicador-ipca > .ultimo').then(($v2) => {
            this.valor2 = $v2.text();
        })
        return this.valor2
    }

    extraiInflacaoInpcIcone = () => {
        cy.get(':nth-child(2) > .indicador-value').then(($v1) => {
            this.valor1 = $v1.text();
        })
        return this.valor1
    }

    extraiInflacaoInpcTabela = () => {
        cy.get('#indicador-inpc > .ultimo').then(($v2) => {
            this.valor2 = $v2.text();
        })
        return this.valor2
    }

    extraiVariacaoPibIcone = () => {
        cy.get('[style="order: 3"] > .indicador-value').then(($v1) => {
            this.valor1 = $v1.text();
        })
        return this.valor1
    }

    extraiVariacaoPibTabela = () => {
        cy.get('#indicador-variacao-do-pib > .dozemeses').then(($v2) => {
            this.valor2 = $v2.text();
        })
        return this.valor2
    }

    comparaValoresExtraidos() {
        return this.valor1 === this.valor2
    }
}

export const indicadoresPage = new IndicadoresPage()