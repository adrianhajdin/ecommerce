const EMPTYARR = []
const SHORTSPLIT = /$|[!-@[-`{-~][\s\S]*/g
const isArray = Array.isArray

const parseValue = function (any) {
  if (any === "") return ""
  if (any === "false") return false
  const maybe = +any
  return maybe * 0 === 0 ? maybe : any
}

const parseAlias = function (aliases) {
  let out = {},
    alias,
    prev,
    any

  for (let key in aliases) {
    any = aliases[key]
    alias = out[key] = isArray(any) ? any : [any]

    for (let i = 0; i < alias.length; i++) {
      prev = out[alias[i]] = [key]

      for (let k = 0; k < alias.length; k++) {
        if (i !== k) prev.push(alias[k])
      }
    }
  }

  return out
}

const parseDefault = function (aliases, defaults) {
  let out = {},
    alias,
    value

  for (let key in defaults) {
    alias = aliases[key]
    value = defaults[key]

    out[key] = value

    if (alias === undefined) {
      aliases[key] = EMPTYARR
    } else {
      for (let i = 0; i < alias.length; i++) {
        out[alias[i]] = value
      }
    }
  }

  return out
}

const parseOptions = function (aliases, options, value) {
  let out = {},
    key,
    alias

  if (options !== undefined) {
    for (let i = 0; i < options.length; i++) {
      key = options[i]
      alias = aliases[key]

      out[key] = value

      if (alias === undefined) {
        aliases[key] = EMPTYARR
      } else {
        for (let k = 0, end = alias.length; k < end; k++) {
          out[alias[k]] = value
        }
      }
    }
  }

  return out
}

const write = function (out, key, value, aliases, unknown) {
  let prev,
    alias = aliases[key],
    len = alias === undefined ? -1 : alias.length

  if (len >= 0 || unknown === undefined || unknown(key)) {
    prev = out[key]

    if (prev === undefined) {
      out[key] = value
    } else {
      if (isArray(prev)) {
        prev.push(value)
      } else {
        out[key] = [prev, value]
      }
    }

    for (let i = 0; i < len; i++) {
      out[alias[i]] = out[key]
    }
  }
}

module.exports = function (argv, opts) {
  let unknown = (opts = opts || {}).unknown,
    aliases = parseAlias(opts.alias),
    strings = parseOptions(aliases, opts.string, ""),
    values = parseDefault(aliases, opts.default),
    bools = parseOptions(aliases, opts.boolean, false),
    stopEarly = opts.stopEarly,
    _ = [],
    out = { _ },
    key,
    arg,
    end,
    match,
    value

  for (let i = 0, len = argv.length; i < len; i++) {
    arg = argv[i]

    if (arg[0] !== "-" || arg === "-") {
      if (stopEarly) {
        while (i < len) {
          _.push(argv[i++])
        }
      } else {
        _.push(arg)
      }
    } else if (arg === "--") {
      while (++i < len) {
        _.push(argv[i])
      }
    } else if (arg[1] === "-") {
      end = arg.indexOf("=", 2)
      if (arg[2] === "n" && arg[3] === "o" && arg[4] === "-") {
        key = arg.slice(5, end >= 0 ? end : undefined)
        value = false
      } else if (end >= 0) {
        key = arg.slice(2, end)
        value =
          bools[key] !== undefined ||
          (strings[key] === undefined
            ? parseValue(arg.slice(end + 1))
            : arg.slice(end + 1))
      } else {
        key = arg.slice(2)
        value =
          bools[key] !== undefined ||
          (len === i + 1 || argv[i + 1][0] === "-"
            ? strings[key] === undefined
              ? true
              : ""
            : strings[key] === undefined
            ? parseValue(argv[++i])
            : argv[++i])
      }
      write(out, key, value, aliases, unknown)
    } else {
      SHORTSPLIT.lastIndex = 2
      match = SHORTSPLIT.exec(arg)
      end = match.index
      value = match[0]

      for (let k = 1; k < end; k++) {
        write(
          out,
          (key = arg[k]),
          k + 1 < end
            ? strings[key] === undefined ||
                arg.substring(k + 1, (k = end)) + value
            : value === ""
            ? len === i + 1 || argv[i + 1][0] === "-"
              ? strings[key] === undefined || ""
              : bools[key] !== undefined ||
                (strings[key] === undefined ? parseValue(argv[++i]) : argv[++i])
            : bools[key] !== undefined ||
              (strings[key] === undefined ? parseValue(value) : value),
          aliases,
          unknown
        )
      }
    }
  }

  for (let key in values) if (out[key] === undefined) out[key] = values[key]
  for (let key in bools) if (out[key] === undefined) out[key] = false
  for (let key in strings) if (out[key] === undefined) out[key] = ""

  return out
}
