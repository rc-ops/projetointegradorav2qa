class IdiomaHomePage {
    openHomePage = (lang) => {
        (lang == 'pt') ?
            cy.visit('https://www.ibge.gov.br/pt/inicio.html')
            : cy.visit('https://www.ibge.gov.br/en/home-eng.html')
    }

    changeLanguage = (lang) => {
        if (lang == 'pt') {
            cy.get('.envolve_logo.mobile-only > .largura-maxima > :nth-child(1) > .header__menu--auxiliar > .mod-languages > .lang-inline > :nth-child(1) > a > img')
                .click()
        } else {
            cy.get('.envolve_logo.mobile-only > .largura-maxima > :nth-child(1) > .header__menu--auxiliar > .mod-languages > .lang-inline > :nth-child(2) > a > img')
                .click()
        }
    }

    checkIfCorrectLanguage = (lang) => {
        if (lang == `pt`){
            cy.get('.popclock-home > .indicador-info > .indicador-title').should('contain', 'População') 
        } else {
            cy.get('.popclock-home > .indicador-info > .indicador-title').should('contain', 'Population')
        }
    }
}

export const idiomaHomePage = new IdiomaHomePage()