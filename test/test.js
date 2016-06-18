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
});
