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

### Getting Started
This plugin requires Grunt `~0.4.2`
```shell
npm install grunt-jsxgettext --save-dev
```
One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:
```js
grunt.loadNpmTasks('grunt-jsxgettext');
```
