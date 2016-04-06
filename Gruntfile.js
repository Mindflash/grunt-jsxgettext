'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
			jshint: {
				all: [
					'Gruntfile.js',
					'tasks/*.js'
				],
				options: {
					jshintrc: '.jshintrc'
				}
			},

			jsxgettext: {
				test: {
					files: [
						{
							src: ['tests/fixtures/**/*.*js', '!ignored'],
							dest: './test.pot'
						}
					],
					options: {
						keyword: ['dgettext', 'dngettext']
					}
				}
			}
		}
	);

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'jsxgettext:test']);
};
