# handlebars-faker
[![Build Status](https://travis-ci.org/jantimon/handlebars-faker.svg?branch=master)](https://travis-ci.org/jantimon/handlebars-faker) [![npm version](https://badge.fury.io/js/handlebars-faker.svg)](https://badge.fury.io/js/handlebars-faker) [![Dependency Status](https://david-dm.org/jantimon/handlebars-faker.svg)](https://david-dm.org/jantimon/handlebars-faker)

Small helper to use faker inside your handlebars template

For a full list of all available fakes see https://github.com/marak/Faker.js/

## Installation

```
npm install handlebars-faker --save-dev
```

## Usage

```js
var Handlebars = require('handlebars');
Handlebars.registerHelper('faker', require('handlebars-faker'));

var template = Handlebars.compile('{{faker "internet.email"}} {{faker "lorem.words" 3}}');
console.log(template({}));
// -> Patricia_Schamberger75@gmail.com voluptas in omnis
```

# Changelog

Take a look at the  [CHANGELOG.md](https://github.com/jantimon/handlebars-faker/tree/master/CHANGELOG.md).


# Contribution

You're free to contribute to this project by submitting [issues](https://github.com/jantimon/handlebars-faker/issues) and/or [pull requests](https://github.com/jantimon/handlebars-faker/pulls). This project is test-driven, so keep in mind that every change and new feature should be covered by tests.
This project uses the [semistandard code style](https://github.com/Flet/semistandard).

# License

This project is licensed under [MIT](https://github.com/jantimon/handlebars-faker/blob/master/LICENSE).
