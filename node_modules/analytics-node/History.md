v3.5.0 / 2021-1-5
==========================
* Update axios to fix the Server-Side Request Forgery vulnerability  (#259) 


v3.4.1-beta.3 / 2020-10-26
==========================
* Update axios to fix the infinite retry bug (#255) 
* Use a local instance of axios to prevent client options leaking to other contexts (#255)

v3.4.1-beta.2 / 2020-06-10
==========================
* Update lodash (#222) (#221) from segmentio/dependabot/npm_and_yarn/lodash-4.17.11 8e9a91d
* Fix typo (#220)
* Update axios (#218)


v3.4.1-beta.1 / 2019-06-20
==========================

  * Upgrade dependencies ([#174](https://github.com/segmentio/analytics-node/pull/174), [#175](https://github.com/segmentio/analytics-node/pull/175), [#176](https://github.com/segmentio/analytics-node/pull/176), [#178](https://github.com/segmentio/analytics-node/pull/178), [#179](https://github.com/segmentio/analytics-node/pull/179), [#211](https://github.com/segmentio/analytics-node/pull/211), [#212](https://github.com/segmentio/analytics-node/pull/212))
  * [Improvement](https://github.com/segmentio/analytics-node/pull/194): Add ability to override host/api url
  * [BREAKING CHANGE](https://github.com/segmentio/analytics-node/pull/195): remove cli from published package

v3.4.0-beta / 2019-06-12
========================

  * Due to a bug in the release step, this version was not published to NPM. It was instead re-published as `v3.4.1-beta.1`.

v3.3.0 / 2018-04-24
===================

  * Promote `v3.3.0-beta.2` to stable

v3.3.0-beta.2 / 2018-03-02
==========================

  * [New](https://github.com/segmentio/analytics-node/pull/158): Add `enable` API to disable client from sending messages. This is useful for testing.
  * [Improvement](https://github.com/segmentio/analytics-node/pull/154): Log when messages exceed our size limits.

v3.3.0-beta.1 / 2018-01-18
========================

  * [Improvement](https://github.com/segmentio/analytics-node/pull/150): Replace `crypto-token` with `uuid` package. This also reduces the total size of the package in the browser by 80%. Note that this will change the structure of the generated `messageId` values.
  * [Improvement](https://github.com/segmentio/analytics-node/pull/146): Improve retry logic to better handle server failures.
  * [Improvement](https://github.com/segmentio/analytics-node/pull/144): Update the user agent format to be [RFC 7231](https://github.com/segmentio/analytics-node/pull/144) compliant.

v3.0.0 / 2017-07-27
===================

  * Flush on first message (#113)
  * Rename flushAfter to flushInterval (#112)
  * remove caching of dependencies on Circle CI
  * improve readme
  * rename README to readme
  * add license
  * disable npm package locks
  * improve package.json
  * moves files into root
  * remove Makefile in favor of npm scripts
  * remove yarn.lock
  * remove History.md in favor of gh releases
  * add editorconfig
  * Convert to ES6 (#110)
  * Remove continuous deployment (#109)
  * Switch from Mocha to AVA (#108)
  * Skip data in flush callbacks (#105)
  * Reset timer on flush (#103)
  * Remove superagent-retry module (#107)
  * Remove browserify build (#104)
  * Update README.md

2.4.1 / 2017-05-05
==================

  * Preventing webpack to bundle all lodash lib (#94)
  * README: fix header
  * README: fix badge
  * package: upgrade dependencies (#89)
  * standard (#88)
  * yarn (#85)
  * analytics-node.js@2.4.0 [ci skip]

2.4.0 / 2017-03-13
==================

  * test: add `_metadata` to "screen" assertion (#87)
  * replace Travis with CircleCI (#86)
  * add support for screen events (#82)
  * use correct optional syntax for JSDOC (#83)

2.3.0 / 2017-03-13
==================

  * Add node version to messages via _metadata (#84)
  * remove trailing slash on `.host` (#81)

2.2.0 / 2017-02-06
==================

  * Replace validation with `@segment/loosely-validate-event`
  * add releasing notes

2.1.1 / 2017-01-31
==================

  * Merge pull request #74 from alexstrat/master
  * Update dependencies

2.1.0 / 2016-03-31
==================

  * adding a cli

2.0.2 / 2016-03-03
==================

  * updating travis.yml
  * increase messageId entropy, and include one id per message

2.0.1 / 2015-12-11
==================

  * makefile: changing bin paths and nsp target
  * Upgraded vulnerable dependencies and minor change in the tests to support them
  * Adding Node Security Project support

2.0.0 / 2015-09-21
==================

  * update analytics-node.js
  * Remove proxy support
  * Merge pull request #47 from yorkie/patch-1
  * remove the duplicated keyword

1.2.2 / 2015-03-19
==================

  * Update analytics-node.js

1.2.1 / 2015-03-19
==================

  * Try to retry a few times before responding

1.2.0 / 2015-02-18
==================

 * add browserify support
 * Add installation instructions to readme

1.1.1 / 2015-02-03
==================

 * Add sentAt

1.l.0 - 2014-08-22
==================

* add: proxy requests

1.0.4 - 2014-08-14
==================

* fix: given contexts to extended and not wiped out

1.0.3 - 2014-08-05
==================

* fix: context data being added to messages

1.0.2 - 2014-07-23
==================

* update: debug dependency

0.6.0 - February 19, 2014
-------------------------
* add group method
