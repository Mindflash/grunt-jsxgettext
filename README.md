## grunt-jsxgettext
[![Build Status](https://travis-ci.org/Mindflash/grunt-jsxgettext.png?branch=master)](https://travis-ci.org/Mindflash/grunt-jsxgettext)
> A Grunt task to run jsxgettext extracting strings and creating POT files.

### Example
```js
grunt.initConfig({
	jsxgettext: {
		test: {
			files: [
				{
					src: ['tests/fixtures/**/*.*js', '!ignored'],
					output: 'test.po',
					'output-dir': './translations/'
				}
			],
			options: {
				keyword: 'gettext'
			}
		}
	}
})
```

### Options

**** generators

Type: 'String' or 'function'
Default:
```
{
    '.ejs': jsxgettext.generateFromEJS,
    '.hbs': jsxgettext.generateFromHandlebars,
    '.jade': jsxgettext.generateFromJade,
    '.swig': jsxgettext.generateFromSwig
}
```
Used to add/modify mapping between file extensions and generators (parsers) used by jsxgettext.

This can be one of the following:

- Specifying a pair of extensions. Used to add a extensions for existing generators. For example 
if we wanted to tell jsxgettext that our handlebars templates have '.html' extensions: ```{'.html': '.hbs'}```
- Specifying an extension along with the jsxgettext generator function name: ```{'.html': 'generateFromSwig'}```
- Specifying an extension along with an generator function: ```{'.html': jsxgettext.generateFromSwig}```


### Getting Started
This plugin requires Grunt `~0.4.2`
```shell
npm install grunt-jsxgettext --save-dev
```
One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```js
grunt.loadNpmTasks('grunt-jsxgettext');
```
