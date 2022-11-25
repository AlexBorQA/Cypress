
describe('Проверка формы логина     ', function () {
 
it('Позитивный кейс: верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');

    })

 it('Негативный кейс: верный логин, неверный пароль', function () {
        cy.reload();
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#loginButton').should('be.disabled');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').should('not.be.disabled');
        cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').click();
        cy.get('#form > .header');
        cy.contains('Форма логина');

})


})
 