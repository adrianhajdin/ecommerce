var type = require('component-type')
var join = require('join-component')
var assert = require('assert')

// Segment messages can be a maximum of 32kb.
var MAX_SIZE = 32 << 10

module.exports = looselyValidateEvent

/**
 * Validate an event.
 */

function looselyValidateEvent (event, type) {
  validateGenericEvent(event)
  type = type || event.type
  assert(type, 'You must pass an event type.')
  switch (type) {
    case 'track':
      return validateTrackEvent(event)
    case 'group':
      return validateGroupEvent(event)
    case 'identify':
      return validateIdentifyEvent(event)
    case 'page':
      return validatePageEvent(event)
    case 'screen':
      return validateScreenEvent(event)
    case 'alias':
      return validateAliasEvent(event)
    default:
      assert(0, 'Invalid event type: "' + type + '"')
  }
}

/**
 * Validate a "track" event.
 */

function validateTrackEvent (event) {
  assert(event.anonymousId || event.userId, 'You must pass either an "anonymousId" or a "userId".')
  assert(event.event, 'You must pass an "event".')
}

/**
 * Validate a "group" event.
 */

function validateGroupEvent (event) {
  assert(event.anonymousId || event.userId, 'You must pass either an "anonymousId" or a "userId".')
  assert(event.groupId, 'You must pass a "groupId".')
}

/**
 * Validate a "identify" event.
 */

function validateIdentifyEvent (event) {
  assert(event.anonymousId || event.userId, 'You must pass either an "anonymousId" or a "userId".')
}

/**
 * Validate a "page" event.
 */

function validatePageEvent (event) {
  assert(event.anonymousId || event.userId, 'You must pass either an "anonymousId" or a "userId".')
}

/**
 * Validate a "screen" event.
 */

function validateScreenEvent (event) {
  assert(event.anonymousId || event.userId, 'You must pass either an "anonymousId" or a "userId".')
}

/**
 * Validate an "alias" event.
 */

function validateAliasEvent (event) {
  assert(event.userId, 'You must pass a "userId".')
  assert(event.previousId, 'You must pass a "previousId".')
}

/**
 * Validation rules.
 */

var genericValidationRules = {
  anonymousId: [ 'string', 'number' ],
  category: 'string',
  context: 'object',
  event: 'string',
  groupId: [ 'string', 'number' ],
  integrations: 'object',
  name: 'string',
  previousId: [ 'string', 'number' ],
  timestamp: 'date',
  userId: [ 'string', 'number' ],
  type: 'string'
}

/**
 * Validate an event object.
 */

function validateGenericEvent (event) {
  assert(type(event) === 'object', 'You must pass a message object.')
  var json = JSON.stringify(event)
  // Strings are variable byte encoded, so json.length is not sufficient.
  assert(Buffer.byteLength(json, 'utf8') < MAX_SIZE, 'Your message must be < 32kb.')

  for (var key in genericValidationRules) {
    var val = event[key]
    if (!val) continue
    var rule = genericValidationRules[key]
    if (type(rule) !== 'array') {
      rule = [ rule ]
    }
    var a = rule[0] === 'object' ? 'an' : 'a'
    assert(
      rule.some(function (e) { return type(val) === e }),
      '"' + key + '" must be ' + a + ' ' + join(rule, 'or') + '.'
    )
  }
}
