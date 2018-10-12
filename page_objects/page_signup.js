'use strict';
var SignUp = function() {

    var _this = this;
    _this.emailField = element(by.name('email'));
    _this.passwordField = element(by.name('password'));
    _this.firstNameField = element(by.name('firstName'));
    _this.lastNameField = element(by.name('lastName'));
    _this.firstName_error_message =  element.all(by.css('#app form span')).first();
    _this.lastName_error_message =  element.all(by.css('#app form span')).get(1);
    _this.email_error_message =  element.all(by.css('#app form span')).get(2);
    _this.password_error_message =  element.all(by.css('#app form span')).last();
    _this.error_message =  element(by.css('#app form span'));
    _this.signUpLink = element(by.xpath('//*[@id="app"]/div/div[1]/div[1]/div/div/div/a[2]'));
    _this.proceedButton = element(by.css('div button'));
    _this.businessNameField  = element(by.name('businessName'));
    _this.cardField  = element(by.name('cardNumber'));
    _this.expDateField  = element(by.name('expirationDate'));
    _this.cvcField  = element(by.name('cvc'));
    _this.termConditionCheckBox  = element.all(by.xpath('//label[.=\'\']')).get(1);
    _this.startFreeTrailButton  = element(by.css('div button'));
    _this.invalidCardNumber = element(by.xpath('//span[text()=\'Card number is incorrect\']'));
    _this.invalidExpDate = element(by.xpath('//span[text()=\'Expiration date is incorrect\']'));
    _this.invalidCVC = element(by.xpath('//span[text()=\'Cvc must be at least 3 characters\']'));
    _this.nextButton  = element(by.className('-Button-button--submit-1UlgDI'));
    _this.verifyEmailPage = element(by.className('-Congratulation-header-35yvig'));
    _this.letDoThisButton = element.all(by.className('-Button-button-3DHYZS')).last();
    _this.logOutButton = element.all(by.css('#app span svg')).get(7);
    _this.signInButton =  element.all(by.css('.-RegistrationHeader-content__wrapper-dNuMiE a')).first();
    _this.popup_error_message = element(by.css('.react-alert span')) ;
    _this.getRandomNum = function() {
            var text = '';
            var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (var i = 0; i < 17; i++){
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;};
};
module.exports = new SignUp() ;