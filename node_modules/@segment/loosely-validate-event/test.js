var test = require('ava')
var AssertionError = require('assert').AssertionError
var validate = require('./')

test('requires "anonymousId" to be a string or number', t => {
  const event = {
    type: 'track',
    anonymousId: { foo: 'bar' }
  }
  t.throws(() => {
    validate(event)
  }, '"anonymousId" must be a string or number.')
})

test('requires "category" to be a string', t => {
  const event = {
    type: 'track',
    category: true
  }
  t.throws(() => {
    validate(event)
  }, '"category" must be a string.')
})

test('requires "integrations" to be an object', t => {
  const event = {
    type: 'track',
    integrations: true
  }
  t.throws(() => {
    validate(event)
  }, '"integrations" must be an object.')
})

test('requires an event type', t => {
  t.throws(() => {
    validate({})
  }, AssertionError)

  t.throws(() => {
    validate({ type: '' }, null)
  }, AssertionError)
})

test('requires a valid event type', t => {
  t.throws(() => {
    validate({ type: 'banana' })
  }, 'Invalid event type: "banana"')
})

test('requires anonymousId or userId on track events', t => {
  t.throws(() => {
    validate({
      type: 'track',
      event: 'Did Something'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.throws(() => {
    validate({
      type: 'track',
      event: 'Did Something',
      fooId: 'banana'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.notThrows(() => {
    validate({
      event: 'Did Something',
      anonymousId: 'banana'
    }, 'track')
  })

  t.notThrows(() => {
    validate({
      type: 'track',
      event: 'Did Something',
      userId: 'banana'
    })
  })
})

test('requires event on track events', t => {
  t.throws(() => {
    validate({
      type: 'track',
      userId: 'banana'
    })
  }, 'You must pass an "event".')

  t.notThrows(() => {
    validate({
      type: 'track',
      event: 'Did Something',
      userId: 'banana'
    })
  })
})

test('requires anonymousId or userId on group events', t => {
  t.throws(() => {
    validate({
      type: 'group',
      groupId: 'foo'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.throws(() => {
    validate({
      type: 'group',
      groupId: 'foo',
      fooId: 'banana'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.notThrows(() => {
    validate({
      type: 'group',
      groupId: 'foo',
      anonymousId: 'banana'
    })
  })

  t.notThrows(() => {
    validate({
      type: 'group',
      groupId: 'foo',
      userId: 'banana'
    })
  })
})

test('requires groupId on group events', t => {
  t.throws(() => {
    validate({
      type: 'group',
      userId: 'banana'
    })
  }, 'You must pass a "groupId".')

  t.notThrows(() => {
    validate({
      type: 'group',
      groupId: 'foo',
      userId: 'banana'
    })
  })
})

test('requires anonymousId or userId on identify events', t => {
  t.throws(() => {
    validate({
      type: 'identify'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.throws(() => {
    validate({
      type: 'identify',
      fooId: 'banana'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.notThrows(() => {
    validate({
      type: 'identify',
      anonymousId: 'banana'
    })
  })

  t.notThrows(() => {
    validate({
      type: 'identify',
      userId: 'banana'
    })
  })
})

test('requires anonymousId or userId on page events', t => {
  t.throws(() => {
    validate({
      type: 'page'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.throws(() => {
    validate({
      type: 'page',
      fooId: 'banana'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.notThrows(() => {
    validate({
      type: 'page',
      anonymousId: 'banana'
    })
  })

  t.notThrows(() => {
    validate({
      type: 'page',
      userId: 'banana'
    })
  })
})

test('requires anonymousId or userId on screen events', t => {
  t.throws(() => {
    validate({
      type: 'screen'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.throws(() => {
    validate({
      type: 'screen',
      fooId: 'banana'
    })
  }, 'You must pass either an "anonymousId" or a "userId".')

  t.notThrows(() => {
    validate({
      type: 'screen',
      anonymousId: 'banana'
    })
  })

  t.notThrows(() => {
    validate({
      type: 'screen',
      userId: 'banana'
    })
  })
})

test('requires userId on alias events', t => {
  t.throws(() => {
    validate({
      type: 'alias'
    })
  }, 'You must pass a "userId".')

  t.throws(() => {
    validate({
      type: 'alias',
      fooId: 'banana'
    })
  }, 'You must pass a "userId".')

  t.notThrows(() => {
    validate({
      type: 'alias',
      userId: 'banana',
      previousId: 'apple'
    })
  })
})

test('requires events to be < 32kb', t => {
  t.throws(() => {
    var event = {
      type: 'track',
      event: 'Did Something',
      userId: 'banana',
      properties: {}
    }
    for (var i = 0; i < 10000; i++) {
      event.properties[i] = 'a'
    }
    validate(event)
  }, 'Your message must be < 32kb.')

  t.notThrows(() => {
    validate({
      type: 'track',
      event: 'Did Something',
      userId: 'banana'
    })
  })
})
