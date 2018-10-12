/**
 * Created by farhanghaffar on 08.
 */
'use strict';
var SignIn = function() {

    var _this = this;
    _this.emailField = element(by.name('email'));
    _this.passwordField = element(by.name('password'));
    _this.loginButton = element(by.xpath('//button[text()=\'Login\']'));
    _this.invalid_email_error_message = element.all(by.css('#app form span')).first();
    _this.invalid_password_error_message = element.all(by.css('#app form span')).last();
    _this.error_message = element(by.css('#app form span')) ;
    _this.invalid_email_password_error_message = element(by.className('react-alert')) ;
    _this.verifyUserAccount = element(by.className('g-page__headline'));
    _this.rememberCheckBox = element(by.xpath('//label[.=\'\']'));
};

module.exports = new SignIn();
