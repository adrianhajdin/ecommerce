/**
 * @description A module for parsing ISO8601 durations
 */

/**
 * The pattern used for parsing ISO8601 duration (PnYnMnDTnHnMnS).
 * This does not cover the week format PnW.
 */

// PnYnMnDTnHnMnS
const numbers = '\\d+(?:[\\.,]\\d+)?'
const weekPattern = `(${numbers}W)`
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`
const timePattern = `T(${numbers}H)?(${numbers}M)?(${numbers}S)?`

const iso8601 = `P(?:${weekPattern}|${datePattern}(?:${timePattern})?)`
const objMap = ['weeks', 'years', 'months', 'days', 'hours', 'minutes', 'seconds']

const defaultDuration = Object.freeze({
  years: 0,
  months: 0,
  weeks: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

/**
 * The ISO8601 regex for matching / testing durations
 */
export const pattern = new RegExp(iso8601)

/** Parse PnYnMnDTnHnMnS format to object
 * @param {string} durationString - PnYnMnDTnHnMnS formatted string
 * @return {Object} - With a property for each part of the pattern
 */
export const parse = durationString => {
  // Slice away first entry in match-array
  return durationString.match(pattern).slice(1).reduce((prev, next, idx) => {
    prev[objMap[idx]] = parseFloat(next) || 0
    return prev
  }, {})
}

/**
 * Convert ISO8601 duration object to an end Date.
 *
 * @param {Object} duration - The duration object
 * @param {Date} startDate - The starting Date for calculating the duration
 * @return {Date} - The resulting end Date
 */
export const end = (duration, startDate) => {
  duration = Object.assign({}, defaultDuration, duration)

  // Create two equal timestamps, add duration to 'then' and return time difference
  const timestamp = (startDate ? startDate.getTime() : Date.now())
  const then = new Date(timestamp)

  then.setFullYear(then.getFullYear() + duration.years)
  then.setMonth(then.getMonth() + duration.months)
  then.setDate(then.getDate() + duration.days)
  then.setHours(then.getHours() + duration.hours)
  then.setMinutes(then.getMinutes() + duration.minutes)
  // Then.setSeconds(then.getSeconds() + duration.seconds);
  then.setMilliseconds(then.getMilliseconds() + (duration.seconds * 1000))
  // Special case weeks
  then.setDate(then.getDate() + (duration.weeks * 7))

  return then
}

/**
 * Convert ISO8601 duration object to seconds
 *
 * @param {Object} duration - The duration object
 * @param {Date} startDate - The starting point for calculating the duration
 * @return {Number}
 */
export const toSeconds = (duration, startDate) => {
  duration = Object.assign({}, defaultDuration, duration)

  const timestamp = (startDate ? startDate.getTime() : Date.now())
  const now = new Date(timestamp)
  const then = end(duration, now)

  const seconds = (then.getTime() - now.getTime()) / 1000
  return seconds
}

export default {
  end,
  toSeconds,
  pattern,
  parse
}
