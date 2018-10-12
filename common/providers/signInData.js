'use strict';
var SignInData = function() {

    var _this = this;
    _this.data = {
        email: '@gmail.com',
        password: 'Abcd1234',
        invalidFormatEmail:'auto_test',
        invalidFormatPassword:'abcd',
        dummyEmail: 'test@gamil.com',
        emptyInput: ''
    };
};

module.exports = new SignInData();
