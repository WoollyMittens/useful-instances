var webdriverjs = require('webdriverjs'),
    assert = require('assert'),
    usefulInstances = require('../src/js/useful-instances.js'),
    path = 'http://local.woollymittens.nl/useful-instances/';

describe('Expected behaviours of "useful-instances"', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
        client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        client.init();
    });

    it('should create multiple instances of the same script with unique configurations', function(done){
        client
            .url(path)
            .execute(function () {

                return [instances[0].cfg.color, instances[1].cfg.color];

            }, function (err, result) {

                assert(
                    result.value[0] !== result.value[1]
                );

            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});
