var test = require('tap').test;
var grunt = require('grunt');
var path = require('path');
var task = require('../lib');
var util = require('util');
var jsxgettext = require('jsxgettext');

test('N files work', function(t) {
  var options = {
    files: [
      path.join(__dirname, 'fixtures/files/test.ejs'),
      path.join(__dirname, 'fixtures/files/test.js')
    ],
    keyword: 'dgettext|dngettext'
  };

  task(grunt, options, function(err, res) {
    t.notOk(err, 'No error should be returned, received: ' + util.inspect(err, { depth: null }));
    t.ok(res, 'A results should have been returned, received: ' + util.inspect(res, { depth: null }));
    t.end();
  });
});

test('Ignores non existent files', function(t) {
  var options = {
    files: [
      path.join(__dirname, 'fixtures/files/doesNotExist.ejs'),
      path.join(__dirname, 'fixtures/files/doesNotExist.js')
    ],
    keyword: 'dgettext|dngettext'
  };

  task(grunt, options, function(err, res) {
    t.ok(err, 'An error should be returned, received: ' + util.inspect(err, { depth: null }));
    t.notOk(res, 'No results should have been returned, received: ' + util.inspect(res, { depth: null }));
    t.end();
  });
});

test('Generator extension mapping works', function(t) {
  var options = {
    files: [
      path.join(__dirname, 'fixtures/files/test.html'),
      path.join(__dirname, 'fixtures/files/test.js')
    ],
    keyword: 'dgettext|dngettext',
    generators: {
      ext: '.html',
      generator: '.ejs'
    }
  };

  task(grunt, options, function(err, res) {
    t.notOk(err, 'No error should be returned, received: ' + util.inspect(err, { depth: null }));
    t.ok(res, 'A results should have been returned, received: ' + util.inspect(res, { depth: null }));
    t.end();
  });
});

test('Generator generator name mapping works', function(t) {
  var options = {
    files: [
      path.join(__dirname, 'fixtures/files/test.html'),
      path.join(__dirname, 'fixtures/files/test.js')
    ],
    keyword: 'dgettext|dngettext',
    generators: {
      ext: '.html',
      generator: 'generateFromEJS'
    }
  };

  task(grunt, options, function(err, res) {
    t.notOk(err, 'No error should be returned, received: ' + util.inspect(err, { depth: null }));
    t.ok(res, 'A results should have been returned, received: ' + util.inspect(res, { depth: null }));
    t.end();
  });
});

test('Generator generator function mapping works', function(t) {
  var options = {
    files: [
      path.join(__dirname, 'fixtures/files/test.html'),
      path.join(__dirname, 'fixtures/files/test.js')
    ],
    keyword: 'dgettext|dngettext',
    generators: {
      ext: '.html',
      generator: jsxgettext.generateFromEJS
    }
  };

  task(grunt, options, function(err, res) {
    t.notOk(err, 'No error should be returned, received: ' + util.inspect(err, { depth: null }));
    t.ok(res, 'A results should have been returned, received: ' + util.inspect(res, { depth: null }));
    t.end();
  });
});
