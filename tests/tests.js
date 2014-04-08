var test = require('tap').test;
var grunt = require("grunt");
var path = require("path");
var task = require("../lib");
var util = require('util');

test("N files work", function (t) {
	var options = {
		files: [
			path.join(__dirname, "fixtures/files/test.ejs"),
			path.join(__dirname, "fixtures/files/test.js")
		],
		keyword: 'getText'
	};

	task(grunt, options, function (err, res) {
		t.notOk(err, "No error should be returned, received: " + util.inspect(err, {depth: null}));
		t.ok(res, "A results should have been returned, received: " + util.inspect(res, {depth: null}));
		t.end();
	});
});

test("Ignores non existent files", function (t) {
	var options = {
		files: [
			path.join(__dirname, "fixtures/files/doesNotExist.ejs"),
			path.join(__dirname, "fixtures/files/doesNotExist.js")
		],
		keyword: 'getText'
	};

	task(grunt, options, function (err, res) {
		t.ok(err, "An error should be returned, received: " + util.inspect(err, {depth: null}));
		t.notOk(res, "No results should have been returned, received: " + util.inspect(res, {depth: null}));
		t.end();
	});
});
