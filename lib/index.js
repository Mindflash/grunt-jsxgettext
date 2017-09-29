'use strict';
var _ = require('lodash');
var path = require('path');
var util = require('util');
var jsxgettext = require('jsxgettext');
var fs = require('fs');

/*
 options: {
 files: ['file-path','file-path'],
 + jsxgettext options
 }
 */
module.exports = function(grunt, options, cb) {
  var generators = {
    '.ejs': jsxgettext.generateFromEJS,
    '.hbs': jsxgettext.generateFromHandlebars,
    '.jade': jsxgettext.generateFromJade,
    '.swig': jsxgettext.generateFromSwig
  };

  // dynamically update generators mapping
  if (options.generators) {
    if (!_.isArray(options.generators)) {
      options.generators = [options.generators];
    }

    _.forEach(options.generators, function(elem) {
      // elem.generator can be either a string or a generator method (i.e. own generator or import from jsxgettext)
      if (typeof elem.generator === 'string' || elem.generator instanceof String) {
        // elem.generator can be an extension, which is used to remap predefined generators to different extensions
        // or elem.generator is the name of an generator method implemented in jsxgettext
        if (elem.generator.match(/^\..*/)) {
          generators[elem.ext] = generators[elem.generator];
        } else {
          generators[elem.ext] = jsxgettext[elem.generator];
        }
      } else {
        generators[elem.ext] = elem.generator;
      }
    });
  }

  var files = {};
  var dest = options.dest;

  if (!fs.existsSync(path.dirname(dest)))
    return cb(util.format('Destination directory %s does not exist.', dest));

  _(options.files)
    .filter(unary(grunt.file.exists))
    .each(function(file) {
      var ext = path.extname(file);
      var content = grunt.file.read(file, { encoding: 'utf-8' });

      // pre-process non js files for use by jsxgettext.generate
      if (ext !== '.js') {
        var args = {};
        args[file] = content;
        files = _.assign(files, generators[ext](args, options).shift());
        return;
      }

      files[file] = content;
    });

  if (_.isEmpty(files))
    return cb('No valid input files found, received: ' + util.inspect(options.files, { depth: null }));

  cb(null, jsxgettext.generate(files, options));
};

function unary(fn) {
  if (fn.length === 1) return fn;
  return function(args) {
    return fn.call(this, args);
  };
}
