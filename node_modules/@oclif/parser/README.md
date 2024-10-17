@oclif/parser
=============

**This library has been replaced by [@oclif/core](https://github.com/oclif/core) and is now in maintenance mode. We will only consider PRs that address security concerns.**

arg and flag parser for oclif

[![Version](https://img.shields.io/npm/v/@oclif/parser.svg)](https://npmjs.org/package/@oclif/parser)
[![CircleCI](https://circleci.com/gh/oclif/parser/tree/main.svg?style=svg)](https://circleci.com/gh/oclif/parser/tree/main)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/parser?branch=main&svg=true)](https://ci.appveyor.com/project/heroku/parser/branch/main)
[![Known Vulnerabilities](https://snyk.io/test/npm/@oclif/parser/badge.svg)](https://snyk.io/test/npm/@oclif/parser)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/parser.svg)](https://npmjs.org/package/@oclif/parser)
[![License](https://img.shields.io/npm/l/@oclif/parser.svg)](https://github.com/oclif/parser/blob/main/package.json)

CLI flag parser.

Usage:

```js
const CLI = require('cli-flags')

const {flags, args} = CLI.parse({
  flags: {
    'output-file': CLI.flags.string({char: 'o'}),
    force: CLI.flags.boolean({char: 'f'})
  },
  args: [
    {name: 'input', required: true}
  ]
})

if (flags.force) {
  console.log('--force was set')
}

if (flags['output-file']) {
  console.log(`output file is: ${flags['output-file']}`)
}

console.log(`input arg: ${args.input}`)

// $ node example.js -f myinput --output-file=myexample.txt
// --force was set
// output file is: myexample.txt
// input arg: myinput
```
