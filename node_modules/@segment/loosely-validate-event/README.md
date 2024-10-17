# @segment/loosely-validate-event

Loosely validate an event.

## Example

```js
const validate = require('@segment/loosely-validate-event')

const event = {
  type: 'track',
  userId: 'abc123',
  properties: {
    foo: 'bar'
  }
}

validate(event) // throws if `event` does not pass validation
```
