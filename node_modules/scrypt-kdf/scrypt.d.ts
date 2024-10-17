/**
 * scrypt parameters
 */
export interface ScryptParams {
  /**
   * CPU/memory cost parameter.
   */
  logN: number;

  /**
   * Block size parameter.
   */
  r: number;

  /**
   * Parallelization parameter.
   */
  p: number;
}

/**
 * Produce derived key using scrypt as a key derivation function.
 *
 * @param passphrase Secret value such as a password from which key is to be derived.
 * @param params Scrypt parameters.
 * @returns Derived key (base-64 encoded).
 *
 * @example
 *   const key = await Scrypt.kdf('my secret password', { logN: 15 });
 */
export declare function kdf(passphrase: string|ArrayBufferView, params: Readonly<ScryptParams>): Promise<Buffer>;

/**
 * Check whether key was generated from passphrase.
 *
 * @param key Derived base64 key obtained from Scrypt.kdf().
 * @param passphrase Passphrase originally used to generate key.
 * @returns True if key was generated from passphrase.
 *
 * @example
 *   const ok = await Scrypt.verify(key, 'my secret password');
 */
export declare function verify(key: Uint8Array, passphrase: string|ArrayBufferView): Promise<boolean>;

/**
 * View scrypt parameters which were used to derive key.
 *
 * @param key Derived base64 key obtained from Scrypt.kdf().
 * @returns Scrypt parameters logN, r, p.
 *
 * @example
 *   const key = await Scrypt.kdf('my secret password', { logN: 15 } );
 *   const params = Scrypt.viewParams(key); // => { logN: 15, r: 8, p: 1 }
 */
export declare function viewParams(key: Uint8Array): ScryptParams;

/**
 * Calculate scrypt parameters from maxtime, maxmem, maxmemfrac values.
 *
 * Adapted from Colin Percival's code: see github.com/Tarsnap/scrypt/tree/master/lib.
 *
 * Returned parameters may vary depending on computer specs & current loading.
 *
 * @param maxtime Maximum time in seconds scrypt will spend computing the derived key.
 * @param maxmem Maximum bytes of RAM used when computing the derived encryption key.
 * @param maxmemfrac Fraction of the available RAM used when computing the derived key.
 * @returns Scrypt parameters logN, r, p.
 *
 * @example
 *   const params = Scrypt.pickParams(0.1); // => e.g. { logN: 15, r: 8, p: 1 }
 */
export declare function pickParams(maxtime: number, maxmem?: number, maxmemfrac?: number): ScryptParams;
