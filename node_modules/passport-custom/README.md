# passport-custom

[![Build](https://travis-ci.org/mbell8903/passport-custom.png)](https://travis-ci.org/mbell8903/passport-custom)
[![Coverage Status](https://coveralls.io/repos/mbell8903/passport-custom/badge.png)](https://coveralls.io/r/mbell8903/passport-custom)
[![Quality](https://codeclimate.com/github/mbell8903/passport-custom.png)](https://codeclimate.com/github/mbell8903/passport-custom)
[![Dependencies](https://david-dm.org/mbell8903/passport-custom.png)](https://david-dm.org/mbell8903/passport-custom)
[![Tips](http://img.shields.io/gittip/mbell8903.png)](https://www.gittip.com/mbell8903/)


[Passport](http://passportjs.org/) strategy for authenticating with custom logic.

This module lets you authenticate using custom logic in your Node.js
applications. It is based on passport-local module by Jared Hanson.
By plugging into Passport, custom authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

    $ npm install passport-custom

## Usage

#### Configure Strategy

The custom authentication strategy authenticates users by custom logic of your choosing.
The strategy requires a `verify` callback, which is where the custom logic goes and calls
`done` providing a user. Note that, req is always passed as the first parameter to the 
`verify` callback.

Here is the pseudo code:

```javascript
import passportCustom from 'passport-custom';
const CustomStrategy = passportCustom.Strategy;

passport.use('strategy-name', new CustomStrategy(
  function(req, callback) {
    // Do your custom user finding logic here, or set to false based on req object
    callback(null, user);
  }
));
```

And a basic example:

```javascript
passport.use(new CustomStrategy(
  function(req, done) {
    User.findOne({
      username: req.body.username
    }, function (err, user) {
      done(err, user);
    });
  }
));
```

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'custom'` strategy (or whatever you named the strategy upon registration), to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

```javascript
app.post('/login',
  passport.authenticate('custom', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);
```

## Tests

    $ npm install
    $ npm test

## Credits

  - [Mike Bell](http://github.com/mbell8903)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014-2015 Mike Bell
