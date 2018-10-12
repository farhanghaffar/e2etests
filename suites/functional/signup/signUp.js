'use strict';
var using = require ('jasmine-data-provider');
var url = requireProviders('url');
var signUpData = requireProviders('signUpData');
var signUpPage = requirePageObjects('page_signup');
var signInPage = requirePageObjects('page_signIn');
var ConnectDatabase = requirePageObjects('db_connection');
var fs = require('fs') ;
describe('sign up', function() {
    var path = 'assets\\data.txt' ;
    beforeEach(function() {
        browser.ignoreSynchronization = true ;
        browser.get(url.rootUrl);
    });
    var arrayOfValidCardData =  function() {
        return [
            {
                'number': '4242424242424242',
                'brand': 'Visa'
            },

            {
               'number': '4000056655665556',
               'brand': 'Visa (debit)'
            },
        {
               'number': '5555555555554444',
               'brand': 'Mastercard'
           },
           {
               'number': '2223003122003222',
               'brand': 'Mastercard (2-series)'
           },
           {
               'number': '5200828282828210',
               'brand': 'Mastercard (debit)'
           },
           {
               'number': '5105105105105100',
               'brand': 'Mastercard (prepaid)'
           },
           {
               'number': '378282246310005',
               'brand': 'American Express'
           },
           {
               'number': '371449635398431',
               'brand': 'American Express'
           },
           {
               'number': '6011111111111117',
               'brand': 'Discover'
           },
           {
               'number': '6011000990139424',
               'brand': 'Discover'
           },
           {
               'number': '30569309025904',
               'brand': 'Diners Club'
           },
           {
               'number': '38520000023237',
               'brand': 'Diners Club'
           },
           {
               'number': '3566002020360505',
               'brand': 'JCB'
           },
           {
               'number': '6200000000000005',
               'brand': 'UnionPay'
           },
        ];
    };
    var arrayOfInvalidCardData =  function() {
        return [
            {
                'number': '4000000000000002',
            },
            {
                'number': '4000 0000 0000 0127',
            },
            {
                'number': '4000000000000069',
            },
            {
                'number': '4000000000000119',
            },
            {
                'number': '4242424242424241',
            }
        ];
    };
    it('should verify sign up for empty first name, last name, email and password', function(){
        browser.sleep(1000);
        signUpPage.signUpLink.click();
        browser.sleep(2000);
        signUpPage.firstNameField.sendKeys(signUpData.data.emptyInput);
        signUpPage.lastNameField.sendKeys(signUpData.data.emptyInput);
        signUpPage.emailField.sendKeys(signUpData.data.emptyInput);
        signUpPage.passwordField.sendKeys(signUpData.data.emptyInput);
        signUpPage.firstNameField.sendKeys(signUpData.data.emptyInput);
        expect(signUpPage.firstName_error_message.getText())
            .toEqual('First name can\'t be blank');
        expect(signUpPage.lastName_error_message.getText())
            .toEqual('Last name can\'t be blank');
        expect(signUpPage.email_error_message.getText())
            .toEqual('Email can\'t be blank');
        expect(signUpPage.password_error_message.getText())
            .toEqual('Password can\'t be blank');
    });
    it('should verify sign up for empty first name', function() {
        browser.sleep(1000);
        signUpPage.signUpLink.click();
        browser.sleep(2000);
        signUpPage.firstNameField.sendKeys(signUpData.data.emptyInput);
        signUpPage.lastNameField.sendKeys(signUpData.data.lastName);
        signUpPage.emailField.sendKeys(signUpData.data.dummyEmail);
        signUpPage.passwordField.sendKeys(signUpData.data.password);
        expect(signUpPage.error_message.getText())
            .toEqual('First name can\'t be blank');
    });
    it('should verify sign up for empty last name', function() {
        browser.sleep(1000);
        signUpPage.signUpLink.click();
        browser.sleep(2000);
        signUpPage.firstNameField.sendKeys(signUpData.data.firstName);
        signUpPage.lastNameField.sendKeys(signUpData.data.emptyInput);
        signUpPage.emailField.sendKeys(signUpData.data.dummyEmail);
        signUpPage.passwordField.sendKeys(signUpData.data.password);
        expect(signUpPage.error_message.getText())
            .toEqual('Last name can\'t be blank');
    });
    it('should verify sign up for empty email', function() {
        browser.sleep(1000);
        signUpPage.signUpLink.click();
        browser.sleep(2000);
        signUpPage.firstNameField.sendKeys(signUpData.data.firstName);
        signUpPage.lastNameField.sendKeys(signUpData.data.lastName);
        signUpPage.emailField.sendKeys(signUpData.data.emptyInput);
        signUpPage.passwordField.sendKeys(signUpData.data.password);
        expect(signUpPage.error_message.getText())
            .toEqual('Email can\'t be blank');
    });
    it('should verify sign up for empty password', function() {
        browser.sleep(1000);
        signUpPage.signUpLink.click();
        browser.sleep(2000);
        signUpPage.firstNameField.sendKeys(signUpData.data.firstName);
        signUpPage.lastNameField.sendKeys(signUpData.data.lastName);
        signUpPage.emailField.sendKeys(signUpData.data.dummyEmail);
        signUpPage.passwordField.sendKeys(signUpData.data.emptyInput);
        signUpPage.firstNameField.clear();
        signUpPage.firstNameField.sendKeys(signUpData.data.firstName);
        expect(signUpPage.error_message.getText())
            .toEqual('Password can\'t be blank');
    });
    it('should verify sign up for wrong email format', function() {
        browser.sleep(1000);
        signUpPage.signUpLink.click();
        browser.sleep(2000);
        signUpPage.firstNameField.sendKeys(signUpData.data.firstName);
        signUpPage.lastNameField.sendKeys(signUpData.data.lastName);
        signUpPage.emailField.sendKeys(signUpData.data.invalidEmailFormat);
        signUpPage.passwordField.sendKeys(signUpData.data.password);
        expect(signUpPage.error_message.getText())
            .toEqual('Email must be valid');
    });
    it('should verify sign up for wrong password format', function() {
        browser.sleep(1000);
        signUpPage.signUpLink.click();
        browser.sleep(2000);
        signUpPage.firstNameField.sendKeys(signUpData.data.firstName);
        signUpPage.lastNameField.sendKeys(signUpData.data.lastName);
        signUpPage.emailField.sendKeys(signUpData.data.dummyEmail);
        signUpPage.passwordField.sendKeys(signUpData.data.invalidPasswordFormat);
        signUpPage.firstNameField.clear();
        signUpPage.firstNameField.sendKeys(signUpData.data.firstName);
        expect(signUpPage.error_message.getText())
            .toEqual('Password must be at least 8 characters');
        signUpPage.signInButton.click();
    });

    using(arrayOfInvalidCardData, function(inputData) {
        it('Test various invalid credit cards for registration', function()
        {
            browser.sleep(2000);
            var randomNumber = signUpPage.getRandomNum() ;
            signUpPage.signUpLink.click();
            browser.sleep(2000);
            signUpPage.firstNameField.sendKeys(signUpData.data.firstName);
            signUpPage.lastNameField.sendKeys(signUpData.data.lastName);
            signUpPage.emailField.sendKeys('autobot_' + randomNumber + signUpData.data.email);
            signUpPage.passwordField.sendKeys(signUpData.data.password);
            signUpPage.proceedButton.click();
            browser.sleep(2000);
            signUpPage.businessNameField.sendKeys(signUpData.data.businessName + randomNumber);
            signUpPage.cardField.sendKeys(inputData.number);
            signUpPage.expDateField.sendKeys(signUpData.data.expDate);
            signUpPage.cvcField.sendKeys(signUpData.data.cvcCode);
            signUpPage.termConditionCheckBox.click();
            signUpPage.startFreeTrailButton.getAttribute('class').then(function(cls){
                if (!cls.includes('-Button-button--disabled-3iZdvY')) {
                    signUpPage.startFreeTrailButton.click();
                    browser.sleep(10000);
                }
            });
            console.log('card number: ' + inputData.number);
            signUpPage.signInButton.click();
        });
    });

    using(arrayOfValidCardData, function(inputData) {
        it('Test valid credit cards for registration', function()
        {
            browser.sleep(2000);
            var randomNumber = signUpPage.getRandomNum() ;
            signUpPage.signUpLink.click();
            browser.sleep(2000);
            signUpPage.firstNameField.sendKeys(signUpData.data.firstName);
            signUpPage.lastNameField.sendKeys(signUpData.data.lastName);
            signUpPage.emailField.sendKeys('autobot_' + randomNumber + signUpData.data.email);
            signUpPage.passwordField.sendKeys(signUpData.data.password);
            signUpPage.proceedButton.click();
            browser.sleep(3000);
            signUpPage.businessNameField.sendKeys(signUpData.data.businessName + randomNumber);
            signUpPage.cardField.sendKeys(inputData.number);
            signUpPage.expDateField.sendKeys(signUpData.data.expDate);
            signUpPage.cvcField.sendKeys(signUpData.data.cvcCode);
            signUpPage.termConditionCheckBox.click();
            signUpPage.startFreeTrailButton.click();
            browser.sleep(30000);
            signUpPage.nextButton.click();
            browser.sleep(2000);
            signUpPage.letDoThisButton.click().then(function() {
                var email = 'autobot_' + randomNumber + signUpData.data.email;
                var connectDatabase = new ConnectDatabase();
                connectDatabase.conn.connect(function(err) {
                    if(err){
                        console.log(err.code);
                        console.log(err.fatal);
                    }
                });
                var query = 'update users set confirmed_at = \'2018-04-16 09:29:48.380310\', confirmation_token =null ' + ' where email=\'' + email + '\'';
               // console.log(query);
                connectDatabase.conn.query(query, function(err, result) {
                    if(err){
                        console.log('An error ocurred performing the query.');
                        return;
                    }
                   // console.log(result.affectedRows + ' record(s) updated');
                });
                browser.sleep(4000);
            });
            browser.sleep(2000);
            // here save email id
            fs.writeFile(path, 'autobot_' + randomNumber, function(error) {
                if (error) {
                    console.error('write error:' + error.message);
                } else {

                }
            });

            console.log('card number: ' + inputData.number);
            console.log('card brand: ' + inputData.brand);
            signUpPage.logOutButton.click();
        });
    });
});
