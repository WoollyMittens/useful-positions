var webdriverjs = require('webdriverjs'),
    assert = require('assert'),
    usefulPositions = require('../src/js/useful-positions.js'),
    path = 'http://local.woollymittens.nl/useful-positions/';

describe('Expected behaviours of "useful-positions"', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
        client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        client.init();
    });

    it('should report the window size', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                done(
                    useful.positions.window()
                );

            }, function (err, result) {

                assert(
                    !isNaN(parseInt(result.value.x))
                );

            })
            .call(done);
    });

    it('should report the scroll position', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                positionTest.scrollTop = 100;
                done(
                    useful.positions.document(positionTest)
                );

            }, function (err, result) {

                assert(
                    result.value.y === 100
                );

            })
            .call(done);
    });

    it('should report an object\'s position', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                done(
                    useful.positions.object(positionTest)
                );

            }, function (err, result) {

                assert(
                    result.value.y === 136
                );

            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});
