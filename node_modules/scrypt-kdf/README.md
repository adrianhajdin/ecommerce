Scrypt Key Derivation Function
==============================

[![Build Status](https://travis-ci.org/chrisveness/scrypt-kdf.svg?branch=master)](https://travis-ci.org/chrisveness/scrypt-kdf)
[![Coverage Status](https://coveralls.io/repos/github/chrisveness/scrypt-kdf/badge.svg?branch=master)](https://coveralls.io/github/chrisveness/scrypt-kdf?branch=master)

Scrypt is a *password-based [key derivation function](https://en.wikipedia.org/wiki/Key_derivation_function)*, useful for storing password hashes for verifying interactive logins.

Passwords should never, of course, be stored as plaintext, but even salted hashed passwords can be susceptible to brute-force attack using custom hardware. Key derivation functions can be tuned to be computationally expensive to calculate, in order to protect against attack.

Scrypt is a ‘memory-hard’ algorithm, meaning that it will produce keys (hashes) which are strongly resistant to attack using GPUs and other custom hardware, which may be computationally powerful but have limited memory. It is designed to be stronger than earlier KDFs [bcrypt](PBKDF2) and  [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2).

It was originally developed by Colin Percival as part of the [Tarsnap](http://www.tarsnap.com/scrypt.html) file encryption utility. It is fully described in Percival’s paper [Stronger Key Derivation via Sequential Memory-Hard Functions](http://www.tarsnap.com/scrypt/scrypt.pdf), and is specified in [RFC 7841](https://tools.ietf.org/html/rfc7914).

`scrypt-kdf` is a Node.js zero-dependency wrapper around the core [Node.js OpenSSL](https://nodejs.org/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback) implementation of scrypt, providing a `kdf` function and a `verify` function.

- the `kdf(passphrase, params)` function returns a key (together with scrypt parameters and salt), which can be stored for later verification
- the `verify(key, passphrase)` function verifies that the stored key was derived from the supplied password.


Example usage
-------------
 
`scrypt-kdf` is available from [npm](https://www.npmjs.com/package/scrypt-kdf):
 
    $ npm install scrypt-kdf

### hashing

    const Scrypt = require('scrypt-kdf');
    
    const keyBuf = await Scrypt.kdf('my secret pw', { logN: 15 });
    const keyStr = keyBuf.toString('base64');
    // keyStr is 128-char string which can be stored for subsequent verification

### verifying

    const Scrypt = require('scrypt-kdf');

    const user = await users.findOne({ email: req.body.email }); // for example
    const keyBuf = Buffer.from(user.password, 'base64');
    const ok = await Scrypt.verify(keyBuf, req.body.password);

### ES modules

If using ES modules (for instance with the [esm](https://www.npmjs.com/package/esm) package), use

    import Scrypt from 'scrypt-kdf';

in place of

    const Scrypt = require('scrypt-kdf');

API
---

### – hash

`Scrypt.kdf(passphrase, params)` – derive key from given passphrase (async).

- `passphrase` is a user-supplied password string/TypedArray/Buffer to be hashed and stored.
- `params` is an object with properties `logN`, `r`, `p`.
  - `logN` is a CPU/memory cost parameter: an integer *work factor* which determines the cost of the key derivation function, and hence the security of the stored key; for sub-100ms interactive logins, a [value of 15 is recommended](https://blog.filippo.io/the-scrypt-parameters/) for current (2017) hardware (increased from the original 2009 recommendation of 14)
  - `r` (optional) is a block size parameter, an integer conventionally fixed at 8.
  - `p` (optional) is a parallelization parameter, an integer conventionally fixed at 1.
- returns: (promised) key as a Buffer which can be stored in any preferred format.

### – verify

`Scrypt.verify(key, passphrase)` – confirm key was derived from passphrase (async).

- `key` is a Buffer obtained from `Scrypt.kdf()`.
- `passphrase` is the password string/TypedArray/Buffer used to derive the stored `key`.
- returns: (promised) `true` for successful verification, `false` otherwise.

### – view parameters

`Scrypt.viewParams(key)` – return the `logN`, `r`, `p` parameters used to derive `key`.

- `key` is a Buffer derived from `Scrypt.kdf()`.
- returns `{ logN, r, p }` object.

### – pick parameters

`Scrypt.pickParams(maxtime, maxmem, maxmemfrac)` – return scrypt parameters for given operational parameters.

- `maxtime` is the maximum time in seconds scrypt will spend computing the derived encryption key from the password (0.1 seconds is recommended for interactive logins).
- `maxmem` (optional) is the maximum RAM scrypt will use when computing the derived encryption key, in bytes (default maximum available physical memory).
- `maxmemfrac` (optional) is the maximum fraction of available RAM scrypt will use for computing the derived encryption key (default 0.5); if not within the range 0 < maxmemfrac <= 0.5, this will be set to 0.5.
- returns `{ logN, r, p }` object.

Note that results are dependent on the computer the calculation is run on; calculated parameters may vary depending on computer specs & current loading.


OpenSSL implementation
----------------------

`scrypt-kdf` is a wrapper around the [OpenSSL](https://www.openssl.org/docs/manmaster/man7/scrypt.html) implementation of scrypt made available through the Node.js [crypto module](https://nodejs.org/api/crypto.html#crypto_crypto_scrypt_password_salt_keylen_options_callback).

Scrypt was introduced into Node.js in [v10.5.0](https://nodejs.org/en/blog/release/v10.5.0/), so `scrypt-kdf` requires Node.js v10.5.0 or above; it can also be used with Node.js v8.5.0...v10.4.1 using the [scrypt-async](https://www.npmjs.com/package/scrypt-async) OpenSSL polyfill with the following code fragment:

    const crypto = require('crypto');
    if (!crypto.scrypt) {
        const scryptAsync = require('scrypt-async');
        crypto.scrypt = function(password, salt, keylen, options, callback) {
            const opt = Object.assign({}, options, { dkLen: keylen });
            scryptAsync(password, salt, opt, (derivedKey) => callback(null, Buffer.from(derivedKey))); 
        };
    }

`Scrypt.pickParams()` will not be available with this polyfill.


Key format
----------

The key is returned as a 96-byte Buffer/Uint8Array for maximum flexibility, in Colin Percival’s [standard file header format](https://github.com/Tarsnap/scrypt/blob/master/FORMAT):

| offset | length | value
| -----: | -----: | :----
|      0 |      6 | ‘scrypt’
|      6 |      1 | version [0]
|      7 |      1 | log2(N)
|      8 |      4 | r (big-endian integer)
|     12 |      4 | p (big-endian integer)
|     16 |     32 | salt
|     48 |     16 | checksum: first 16 bytes of SHA256(bytes 0–47)
|     64 |     32 | HMAC-SHA256(bytes 0–63), with scrypt(password, salt, 64, { N, r, p }) as key

If converted to base-64 (for trouble-free storage or transmission), the key will be a 128-character string, which will always begin with *c2NyeXB0*, as this is ‘scrypt’ encoded as base-64.
