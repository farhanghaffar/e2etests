'use strict';

var url = requireProviders('url');
var signInData = requireProviders('signInData');
var signInPage = requirePageObjects('page_signIn');
var signUpPage = requirePageObjects('page_signup');

var count = 0;
describe('sign in', function() {
    var getSaveEmail = '';
    beforeEach(function() {
        var fs = require('fs');
        var path = 'assets\\data.txt';
        fs.readFile(path, 'utf-8', function(error, data) {
            if (error) {
                console.error('write error:' + error.message);
            } else {
                getSaveEmail = data;
            }
        });
        browser.ignoreSynchronization = true;
        browser.get(url.rootUrl);
    });
    it('should verify sign in for empty email and password', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.emptyInput);
        signInPage.passwordField.sendKeys(signInData.data.emptyInput);
        signInPage.rememberCheckBox.click();
        expect(signInPage.invalid_email_error_message.getText())
            .toEqual('Email can\'t be blank');
        expect(signInPage.invalid_password_error_message.getText())
            .toEqual('Password can\'t be blank');});

    it('should verify sign in for empty email', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.emptyInput);
        signInPage.passwordField.sendKeys(signInData.data.password);
        expect(signInPage.error_message.getText())
             .toEqual('Email can\'t be blank');
    });
    it('should verify sign in for empty password', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.dummyEmail);
        signInPage.passwordField.sendKeys(signInData.data.emptyInput);
        signInPage.rememberCheckBox.click();
        expect(signInPage.error_message.getText())
             .toEqual('Password can\'t be blank');
    });
    it('should verify email has wrong format', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.invalidFormatEmail);
        signInPage.passwordField.sendKeys(signInData.data.password);
        expect(signInPage.error_message.getText()).toEqual('Email must be valid');
    });
    it('should verify password has wrong format', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.dummyEmail);
        signInPage.passwordField.sendKeys(signInData.data.invalidFormatPassword);
        signInPage.rememberCheckBox.click();
        expect(signInPage.error_message.getText())
             .toEqual('Password must be at least 8 characters');
    });
    it('should verify invalid email and password', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(signInData.data.dummyEmail);
        signInPage.passwordField.sendKeys(signInData.data.password);
        signInPage.loginButton.click() ;
    });
    it('should sign in', function() {
        browser.sleep(1000);
        signInPage.emailField.sendKeys(getSaveEmail + signInData.data.email);
        signInPage.passwordField.sendKeys(signInData.data.password);
        signInPage.loginButton.click();
        browser.sleep(10000);
        expect(signInPage.verifyUserAccount.isPresent()).toBe(true);
        signUpPage.logOutButton.click();
        browser.sleep(1000);
    });

});
