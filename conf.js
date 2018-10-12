//config
var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
var path = require('path');
var prettyReporter = new PrettyReporter({
    // required, there is no default
    path: path.join(__dirname, 'results'),
    screenshotOnPassed: true
});

exports.config = {

    onPrepare: function() {
        global.requireProviders = function(relativePath) {
            return require('./common/providers/' + relativePath + '.js');
        };

        global.requirePageObjects = function(relativePath) {
            return require('./page_objects/' + relativePath + '.js');
        };
        jasmine.getEnv().addReporter(prettyReporter);
    },
    framework: 'jasmine2',
    suites: {
        signup: [
            'suites/functional/signup/signUp.js',
        ],
        signin: [
            'suites/functional/signin/signIn.js',
        ]
    },
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: false,
    },
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 25000000,
    },
};
