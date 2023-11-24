import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('The user is at the login page', () => {
    cy.visit('https://www.saucedemo.com/')
});

When(`The user enters the username {string}`, (username) => {
    cy.get('#user-name').type(username)
});

And(`The user enters the password {string}`, (password) => {
    cy.get('#password').type(password)
});

And(`The user clicks on the login button`, () => {
    cy.get('#login-button').click()
});

Then(`Check the url of the page`, () => {
    cy.url().should('contain', 'inventory.html')
});