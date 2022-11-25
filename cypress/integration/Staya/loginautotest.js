
describe('Проверка формы логина     ', function () {


 
it('Позитивный кейс: верный логин, верный пароль', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('s_ivanov2018@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Rgb@528651');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Мои заказы');
})



it('Негативный кейс: верный логин, неверный пароль', function () {
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok > .s-button__content').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('s_ivanov2018@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Rgb@528659');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');

})



it('Негативный кейс: неверный логин, неверный пароль', function () {
        cy.visit('https://staya.dog/login');
        cy.get('.auth-form > form > [type="email"]').type('s_ivanov2020@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('Rgb@528659');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');

})


it('Негативный кейс: невалидный логин, неверный пароль', function () {
        cy.visit('https://staya.dog/login');
        cy.get('.auth-form > form > [type="email"]').type('s_iva6%3"№9;');
        cy.get('.auth-form > form > [type="password"]').type('Rgb@528659');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.window('Адрес электронной почты должен содержать символ "@".');

})

})
 
