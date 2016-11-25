/* global describe, it */
var assert = require('chai').assert;
var faker = require('faker');
var sinon = require('sinon');

var Handlebars = require('handlebars');
Handlebars.registerHelper('faker', require('../'));

describe('handlebars-faker', function () {
  it('should generate a fake email address', function () {
    sinon.stub(faker.internet, 'email').onFirstCall().returns('demo@example.com');
    var result = Handlebars.compile('{{faker "internet.email"}}')({});
    assert.equal(result, 'demo@example.com');
    assert(faker.internet.email.calledOnce);
    faker.internet.email.restore();
  });
  it('should generate a lorem ipsum word list', function () {
    sinon.stub(faker.lorem, 'words').onFirstCall().returns('lorem ipsum');
    var result = Handlebars.compile('{{faker "lorem.words" 2}}')({});
    assert.equal(result, 'lorem ipsum');
    assert(faker.lorem.words.withArgs(2).calledOnce);
    faker.lorem.words.restore();
  });
  it('should generate a lorem ipsum word list when passing an argument as string', function () {
    sinon.stub(faker.lorem, 'words').onFirstCall().returns('lorem ipsum');
    var result = Handlebars.compile('{{faker "lorem.words" "2"}}')({});
    assert.equal(result, 'lorem ipsum');
    assert(faker.lorem.words.withArgs('2').calledOnce);
    faker.lorem.words.restore();
  });
  it('should generate a random number', function () {
    sinon.spy(faker.random, 'number');
    var result = Handlebars.compile('{{faker "random.number" }}')({});
    assert.isNumber(parseInt(result, 10));
    assert(faker.random.number.calledOnce);
    faker.random.number.restore();
  });
  it('should generate a random number when passing an options object as an argument', function () {
    sinon.spy(faker.random, 'number');
    var result = Handlebars.compile('{{faker "random.number" min=4 max=15 precision=1 }}')({});
    var parsedResult = parseInt(result, 10);
    assert(faker.random.number.withArgs({min: 4, max: 15, precision: 1}).calledOnce);
    assert.isNumber(parsedResult);
    assert.isAtLeast(parsedResult, 4);
    assert.isAtMost(parsedResult, 15);
    faker.random.number.restore();
  });
});
