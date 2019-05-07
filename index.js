// @see https://karma-runner.github.io/3.0/dev/plugins.html
// @see https://github.com/karma-runner/karma-jasmine/issues/225

function exitReporter(config) {
    this.onBrowserComplete = (browser) => {
        if (config.singleRun && browser.lastResult.skipped) {
            throw new Error('Tests skipped! Are you still using fit(), xit(), fdescribe() or xdescribe()?')
        }
    };
}

exitReporter.$inject = ['config']

module.exports = {
    'reporter:skipped-tests': ['type', exitReporter]
}