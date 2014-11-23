'use strict';

var concatFiles = require('broccoli-concat');
var removeFile = require('broccoli-file-remover');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-css-concat',

  config: function(/* environment, appConfig */) {
    return {
      cssConcat: {
        inputFiles: [
          'assets/' + this.app.name + '.css',
          'assets/vendor.css'
        ],
        outputFile: '/assets/' + this.app.name + '.css'
      }
    };
  }
};
