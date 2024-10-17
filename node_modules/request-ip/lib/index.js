"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var is = require('./is');

function getClientIpFromXForwardedFor(value) {
  if (!is.existy(value)) {
    return null;
  }

  if (is.not.string(value)) {
    throw new TypeError("Expected a string, got \"".concat(_typeof(value), "\""));
  }

  var forwardedIps = value.split(',').map(function (e) {
    var ip = e.trim();

    if (ip.includes(':')) {
      var splitted = ip.split(':');

      if (splitted.length === 2) {
        return splitted[0];
      }
    }

    return ip;
  });

  for (var i = 0; i < forwardedIps.length; i++) {
    if (is.ip(forwardedIps[i])) {
      return forwardedIps[i];
    }
  }

  return null;
}

function getClientIp(req) {
  if (req.headers) {
    if (is.ip(req.headers['x-client-ip'])) {
      return req.headers['x-client-ip'];
    }

    var xForwardedFor = getClientIpFromXForwardedFor(req.headers['x-forwarded-for']);

    if (is.ip(xForwardedFor)) {
      return xForwardedFor;
    }

    if (is.ip(req.headers['cf-connecting-ip'])) {
      return req.headers['cf-connecting-ip'];
    }

    if (is.ip(req.headers['fastly-client-ip'])) {
      return req.headers['fastly-client-ip'];
    }

    if (is.ip(req.headers['true-client-ip'])) {
      return req.headers['true-client-ip'];
    }

    if (is.ip(req.headers['x-real-ip'])) {
      return req.headers['x-real-ip'];
    }

    if (is.ip(req.headers['x-cluster-client-ip'])) {
      return req.headers['x-cluster-client-ip'];
    }

    if (is.ip(req.headers['x-forwarded'])) {
      return req.headers['x-forwarded'];
    }

    if (is.ip(req.headers['forwarded-for'])) {
      return req.headers['forwarded-for'];
    }

    if (is.ip(req.headers.forwarded)) {
      return req.headers.forwarded;
    }

    if (is.ip(req.headers['x-appengine-user-ip'])) {
      return req.headers['x-appengine-user-ip'];
    }
  }

  if (is.existy(req.connection)) {
    if (is.ip(req.connection.remoteAddress)) {
      return req.connection.remoteAddress;
    }

    if (is.existy(req.connection.socket) && is.ip(req.connection.socket.remoteAddress)) {
      return req.connection.socket.remoteAddress;
    }
  }

  if (is.existy(req.socket) && is.ip(req.socket.remoteAddress)) {
    return req.socket.remoteAddress;
  }

  if (is.existy(req.info) && is.ip(req.info.remoteAddress)) {
    return req.info.remoteAddress;
  }

  if (is.existy(req.requestContext) && is.existy(req.requestContext.identity) && is.ip(req.requestContext.identity.sourceIp)) {
    return req.requestContext.identity.sourceIp;
  }

  if (req.headers) {
    if (is.ip(req.headers['Cf-Pseudo-IPv4'])) {
      return req.headers['Cf-Pseudo-IPv4'];
    }
  }

  if (is.existy(req.raw)) {
    return getClientIp(req.raw);
  }

  return null;
}

function mw(options) {
  var configuration = is.not.existy(options) ? {} : options;

  if (is.not.object(configuration)) {
    throw new TypeError('Options must be an object!');
  }

  var attributeName = configuration.attributeName || 'clientIp';
  return function (req, res, next) {
    var ip = getClientIp(req);
    Object.defineProperty(req, attributeName, {
      get: function get() {
        return ip;
      },
      configurable: true
    });
    next();
  };
}

module.exports = {
  getClientIpFromXForwardedFor: getClientIpFromXForwardedFor,
  getClientIp: getClientIp,
  mw: mw
};