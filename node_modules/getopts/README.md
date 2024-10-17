# Getopts

> Parse CLI arguments.

- Lightweight drop-in replacement for `minimist` and clones.
- Small (180 LOC), focused, no dependencies.
- Up to [6x faster](#benchmarks) than alternatives!

Break up command-line arguments into key-value pairs for easy look-up and retrieval. Built upon [utility conventions](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html#tag_12_02) that have been used for decades, Getopts sane defaults help you write CLI tools that look and feel like the real deal.

```console
$ example --type=module -o main.js *.{js,json}
```

```js
import getopts from "getopts"

const options = getopts(process.argv.slice(2), {
  alias: {
    output: ["o", "f"],
    type: "t",
  },
})
```

The result is an object populated with all the parsed arguments.

```js
{
  _: ["index.js", "package.json"],
  output: "main.js",
  type: "module",
  o: "main.js",
  f: "main.js",
  t: "module",
}
```

## Installation

```console
npm install getopts
```

## Parsing rules

### Short options

A short option consists of a `-` followed by a single alphabetic character. Multiple options can be grouped together without spaces. Short options are boolean by default unless followed by an [operand](#operand) (non-option) or if adjacent to any non-alphabetic characters:

```js
getopts(["-ab", "-c"]) //=> { _: [], a:true, b:true, c:true }
```

```js
getopts(["-a", "alpha"]) //=> { _: [], a:"alpha" }
```

```js
getopts(["-abc1"]) //=> { _: [], a:true, b:true, c:1 }
```

Use [`opts.string`](#optsstring) to parse an option as a string regardless.

```js
getopts(["-kF12"], {
  string: ["k"],
}) //=> { _: [], k:"F12" }
```

The first operand following an option will be used as its value. Use [`opts.boolean`](#optsboolean) to specify that an option should be parsed as a boolean regardless, causing the following argument to be treated as an operand instead.

```js
getopts(["-a", "alpha"], {
  boolean: ["a"],
}) //=> { _: ["alpha"], a:true }
```

Any character listed in the ASCII table can be used as a short option if it's the first character after the dash.

```js
getopts(["-9", "-#10", "-%0.01"]) //=> { _:[], 9:true, #:10, %:0.01 }
```

### Long options

A long option consists of a `--` followed by a name and a value separated by an `=`. Long options without a value are boolean by default.

```js
getopts(["--turbo", "--warp=10"]) //=> { _: [], turbo:true, warp:10 }
```

```js
getopts(["--warp=e=mc^2"]) //=> { _: [], warp:"e=mc^2" }
```

```js
getopts(["--@", "alpha"]) //=> { _: [], @:"alpha" }
```

Negated options start with `--no-` and are always `false`.

```js
getopts(["--no-turbo"]) //=> { _: [], turbo:false }
```

### Operands

Every non-option argument is an operand. Operands are saved to the `result._` operands array.

```js
getopts(["alpha", "-w9", "bravo"]) //=> { _: ["alpha", "bravo"], w:9 }
```

```js
getopts(["--code=alpha", "bravo"]) //=> { _: ["bravo"], code:"alpha" }
```

Everything after a standalone `--` is an operand.

```js
getopts(["--alpha", "--", "--bravo", "--turbo"]) //=> { _:["--bravo", "--turbo"], alpha:true }
```

A single `-` is also treated as an operand.

```js
getopts(["--turbo", "-"]) //=> { _:["-"], turbo:true }
```

### Other

Options specified as boolean or string will be added to the result object as `false` or `""` (even if missing from the arguments array).

```js
getopts([], {
  string: ["a"],
  boolean: ["b"],
}) //=> { _:[], a:"", b:false }
```

Repeated options are stored as arrays with every value in order of appearance.

```js
getopts(["-x?alpha=bravo", "-x3.14", "-x"] //=> { _:[], a:["?alpha=bravo", 3.14, true] }
```

A value may contain newlines or other control characters.

```js
getopts(["--text=top\n\tbottom"]) //=> { _:[], text:"top\n\tbottom" }
```

`="false"` is converted to boolean by default.

```js
getopts(["--turbo=false"]) //=> { _:[], turbo:false }
```

## API

### `getopts(argv, opts)`

Parse command-line arguments. Returns an object mapping argument names to their values.

### `argv[]`

An array of arguments, usually [`process.argv`](https://nodejs.org/docs/latest/api/process.html#process_process_argv).

### `opts.alias`

An object of option aliases. An alias can be a string or an array of strings. Aliases let you declare substitute names for an option, e.g., the short (abbreviated) and long (canonical) variations.

```js
getopts(["-t"], {
  alias: {
    turbo: ["t", "T"],
  },
}) //=> { _:[], t:true, T:true, turbo:true }
```

### `opts.boolean`

An array of options to parse as boolean. In the example below, `t` is parsed as a boolean, causing the following argument to be treated as an operand.

```js
getopts(["-t", "alpha"], {
  boolean: ["t"],
}) //=> { _:["alpha"], t:true }
```

### `opts.string`

An array of flags to parse as strings. In the example below, `t` is parsed as a string, causing all adjacent characters to be treated as a single value and not as individual options.

```js
getopts(["-atabc"], {
  string: ["t"],
}) //=> { _:[], a:true, t:"abc" }
```

### `opts.default`

An object of default values for options not present in the arguments array.

```js
getopts(["--warp=10"], {
  default: {
    warp: 15,
    turbo: true,
  },
}) //=> { _:[], warp:10, turbo:true }
```

### `opts.unknown()`

We call this function for each unknown option. Return `false` to discard the option. Unknown options are those that appear in the arguments array, but are not in `opts.string`, `opts.boolean`, `opts.default`, or `opts.alias`.

```js
getopts(["-abc"], {
  unknown: (option) => "a" === option,
}) //=> { _:[], a:true }
```

### `opts.stopEarly`

A boolean property. If `true`, the operands array `_` will be populated with all the arguments after the first operand.

```js
getopts(["-w9", "alpha", "--turbo", "bravo"], {
  stopEarly: true,
}) //=> { _:["alpha", "--turbo", "bravo"], w:9 }
```

This property is useful when implementing sub-commands in a CLI.

```js
import getopts from "getopts"
import { install, update, uninstall } from "./commands.js"

const options = getopts(process.argv.slice(2), {
  stopEarly: true,
})

const [command, subargv] = options._

if (command === "install") {
  install(subargv)
} else if (command === "update") {
  update(subargv)
} else if (command === "uninstall") {
  uninstall(subargv)
}
```

## Benchmarks

```console
npm --prefix bench start
```

## License

[MIT](LICENSE.md)
