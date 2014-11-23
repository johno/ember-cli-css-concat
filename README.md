# CSS Concat

Concatenate your CSS files when the production environment is set.

## Installation

```
npm i --save-dev ember-cli-css-concat
```

## Usage

By default, your `assets/your-app-name.css` and `assets/vendor.css` will be
concatenated and output as `assets/your-app-name.css`. If you have other
CSS assets, or a different naming scheme, you can specify the `inputFiles`
and `outputFiles` in your `config/environment.js` file:

```javascript
module.exports = function(environment) {
  // ...

  var ENV = {
    // ...

    cssConcat: {
      inputFiles: [
        'path/to/some/file.css',
        'path/to/some/other/file.css'
      ],
      outputFile: 'assets/my-concatenated-css.css'
    },

    // ...
  }

  // ...
};
```

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
