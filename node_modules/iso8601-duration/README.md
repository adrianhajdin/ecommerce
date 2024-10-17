# ISO8601-duration
Node/Js-module for parsing and making sense of ISO8601-durations

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)][1]
[![Build Status: Travis](https://img.shields.io/travis/tolu/ISO8601-duration/master.svg)][2]
[![npm version](https://img.shields.io/npm/v/iso8601-duration.svg)][3]

## The ISO8601 duration format

Durations in ISO8601 comes in two formats:
* **`PnYnMnDTnHnMnS`**  - `P<date>T<time>`  
  The `n` is replaced by the value for each of the date and time elements that follow the `n`.  
  Leading zeros are not required
* **`PnW`** - the week format


Check out the details on [Wikipedia](https://en.wikipedia.org/wiki/ISO_8601#Durations) 

## Install

```
$ npm install iso8601-duration
```

## Usage
Most noteworthy of the interface is the ability to provide a `date` for `toSeconds`-calculations.  
Why becomes evident when working with durations that span dates as all months are not equally long.  
E.g January of 2016 is **744 hours** compared to the **696 hours** of February 2016.  

If a date is not provided for `toSeconds` the timestamp `Date.now()` is used as baseline. 

### Interface

```js
export const toSeconds; // fn = (obj, date?) => number
export const pattern;   // ISO8601 RegExp
export const parse;     // fn = string => obj
export default {
	toSeconds,
	pattern,
	parse
}
```

### Example
Simple usage
```js
import {parse, end, toSeconds, pattern} from 'iso8601-duration';

console.log(parse('P1Y2M4DT20H44M12.67S'));
/* outputs =>
{
	years: 1,
	months: 2,
	days: 4,
	hours: 20,
	minutes: 44,
	seconds: 12.67
}
*/

console.log( toSeconds( parse('PT1H30M10.5S') ) );
// outputs => 5410.5

console.log ( end( parse('P1D') ) );
// outputs => DateObj 2017-10-04T10:14:50.190Z

```

A more complete usecase / example
```js
import {parse, toSeconds, pattern} from 'iso8601-duration';

// convert iso8601 duration-strings to total seconds from some api
const getWithSensibleDurations = someApiEndpoint => {
	// return promise, like fetch does
	return new Promise(resolve => {
		// fetch text
		fetch(someApiEndpoint)
			.then(res => res.text())
			.then(jsonString => {

				// create new pattern that matches on surrounding double-quotes
				// so we can replace the string with an actual number
				const replacePattern = new RegExp(`\\"${pattern.source}\\"`, 'g');
				jsonString = jsonString.replace(replacePattern, m => {
					return toSeconds(parse(m));
				});
				// resolve original request with sensible durations in object
				resolve( JSON.parse(jsonString) );
		});
	});
}

```


## License

MIT @ https://tolu.mit-license.org/

[1]: https://github.com/sindresorhus/xo "xo on github"
[2]: https://travis-ci.org/tolu/ISO8601-duration "travis build status"
[3]: https://www.npmjs.com/package/iso8601-duration "npm package"
