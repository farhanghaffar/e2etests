'use strict';
var SignUpData = function() {

    var _this = this;
    _this.data = {
        firstName: 'Auto',
        lastName: 'Auto',
        email: '@gmail.com',
        password: 'Abcd1234',
        businessName: 'Test' ,
        cardNumber: '4242424242424242' ,
        expDate: '12/19' ,
        cvcCode: '1234' ,
        emptyInput: '',
        dummyEmail: 'test@test.com',
        invalidEmailFormat:'test',
        invalidPasswordFormat:'abcd',
    };
};

module.exports = new SignUpData();
