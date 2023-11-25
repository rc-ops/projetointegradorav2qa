import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { idiomaHomePage } from '../pages/idiomaHomePage';

Given('Eu esteja na página inicial e com o idioma em português', () => {
    idiomaHomePage.openHomePage('pt')
});

When('Eu clicar na bandeira de inglês', () => {
    idiomaHomePage.changeLanguage('en')
});

Then(`O idioma da página deve mudar para inglês`, () => {
   idiomaHomePage.checkIfCorrectLanguage('en');
});

Given(`Eu esteja na página inicial e com o idioma em inglês`, () => {
    idiomaHomePage.openHomePage('en');
});

When(`Eu clicar na bandeira do brasil`, () => {
    idiomaHomePage.changeLanguage('pt')
});

Then(`O idioma da página deve mudar para português`, () => {
    idiomaHomePage.checkIfCorrectLanguage('pt');
});