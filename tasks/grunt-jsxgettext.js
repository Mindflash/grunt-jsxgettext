'use strict';
var _ = require('lodash');
var path = require('path');
var task = require('../lib');
var async = require('async');

module.exports = function (grunt) {
	grunt.registerMultiTask('jsxgettext', 'A Grunt task to run jsxgettext against files to extract strings into a POT file.', function () {
		var self = this;
		var done = self.async();

		async.each(self.files, function(fileSet, eCb) {
            var dest = path.join(fileSet['output-dir'] || '', fileSet.output);
			var options = _.defaults(self.options(), {
				files: fileSet.src,
                dest: dest
			});
			task(grunt, options, function (err, res) {
				if(err) return eCb(err);

				grunt.file.write(dest, res);
				eCb();
			});
		}, function(err) {
			if(err) grunt.fatal(err);
			done();
		});

	});
};
