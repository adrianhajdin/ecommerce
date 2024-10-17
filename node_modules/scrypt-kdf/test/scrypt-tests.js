/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* Tests for scrypt key derivation function.                              (c) C.Veness 2018-2019  */
/*                                                                                   MIT Licence  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

const expect = require('chai').expect; // BDD/TDD assertion library

const Scrypt = require('../scrypt.js');

const password = 'my secret password';
const key0salt = 'c2NyeXB0AAwAAAAIAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA08wOZXFAec6Si7mP1SzrmK6Pvpx2zfUEXXAuM68S4DAnUER44bh+BxsnxMC75Jgs';


describe('Scrypt tests', function() {
    this.slow(20);

    describe('Hash & verify (base64)', function() {
        this.slow(200); // kdf() is intentionally slow

        it('with just logN param', async function() {
            const key = (await Scrypt.kdf(password, { logN: 12 })).toString('base64');
            expect(Scrypt.viewParams(Buffer.from(key, 'base64'))).to.deep.equal({ logN: 12, r: 8, p: 1 });
            expect(await Scrypt.verify(Buffer.from(key, 'base64'), password)).to.be.true;
        });

        it('with logN, r, p params', async function() {
            const key = (await Scrypt.kdf(password, { logN: 12, r: 9, p: 2 })).toString('base64');
            expect(Scrypt.viewParams(Buffer.from(key, 'base64'))).to.deep.equal({ logN: 12, r: 9, p: 2 });
            expect(await Scrypt.verify(Buffer.from(key, 'base64'), password)).to.be.true;
        });

        it('with params as strings', async function() {
            const key = (await Scrypt.kdf(password, { logN: '12', r: '8', p: '1' })).toString('base64');
            expect(Scrypt.viewParams(Buffer.from(key, 'base64'))).to.deep.equal({ logN: 12, r: 8, p: 1 });
            expect(await Scrypt.verify(Buffer.from(key, 'base64'), password)).to.be.true;
        });

        it('fails to verify with bad passphrase', async function() {
            const key = (await Scrypt.kdf(password, { logN: 12 })).toString('base64');
            expect(await Scrypt.verify(Buffer.from(key, 'base64'), 'wrong password')).to.be.false;
        });
    });

    describe('Verify previous key (base64)', function() {
        it('verifies null-salt key', async function() {
            expect(await Scrypt.verify(Buffer.from(key0salt, 'base64'), password)).to.be.true;
        });

        it('fails to verify null-salt key with bad passphrase', async function() {
            expect(await Scrypt.verify(Buffer.from(key0salt, 'base64'), 'wrong password')).to.be.false;
        });
    });

    describe('Uint8Array/Buffer key', function() {
        this.slow(200); // kdf() is intentionally slow

        it('Uint8Array', async function() {
            const pwUint8Array = new Uint8Array([ 99, 98, 97, 96, 95, 94, 94, 92, 91 ]);
            const key = await Scrypt.kdf(pwUint8Array, { logN: 12 });
            expect(Scrypt.viewParams(new Uint8Array(key))).to.deep.equal({ logN: 12, r: 8, p: 1 });
            expect(await Scrypt.verify(new Uint8Array(key), pwUint8Array)).to.be.true;
        });

        it('Buffer', async function() {
            const pwBuffer = Buffer.from([ 99, 98, 97, 96, 95, 94, 94, 92, 91 ]);
            const key = await Scrypt.kdf(pwBuffer, { logN: 12 });
            expect(Scrypt.viewParams(key)).to.deep.equal({ logN: 12, r: 8, p: 1 });
            expect(await Scrypt.verify(key, pwBuffer)).to.be.true;
        });
    });

    describe('TypedArray/Buffer passphrase', function() {
        this.slow(200); // kdf() is intentionally slow

        it('Uint8Array', async function() {
            const pwTypedArray = new Uint8Array([ 99, 98, 97, 96, 95, 94, 94, 92, 91 ]);
            const key = await Scrypt.kdf(pwTypedArray, { logN: 12 });
            expect(Scrypt.viewParams(key)).to.deep.equal({ logN: 12, r: 8, p: 1 });
            expect(await Scrypt.verify(key, pwTypedArray)).to.be.true;
        });

        it('Float64Array', async function() {
            const pwTypedArray = new Float64Array([ 99.8, 98.7, 97.6, 96.5 ]);
            const key = await Scrypt.kdf(pwTypedArray, { logN: 12 });
            expect(Scrypt.viewParams(key)).to.deep.equal({ logN: 12, r: 8, p: 1 });
            expect(await Scrypt.verify(key, pwTypedArray)).to.be.true;
        });

        it('Buffer', async function() {
            const pwBuffer = Buffer.from([ 99, 98, 97, 96, 95, 94, 94, 92, 91 ]);
            const key = await Scrypt.kdf(pwBuffer, { logN: 12 });
            expect(Scrypt.viewParams(key)).to.deep.equal({ logN: 12, r: 8, p: 1 });
            expect(await Scrypt.verify(key, pwBuffer)).to.be.true;
        });
    });

    describe('Pick params', function() {
        it('Picks params for 100ms', async function() {
            const params = Scrypt.pickParams(0.1, 1024*1024*1024, 0.5);
            expect(params).to.have.all.keys('logN', 'r', 'p');
            expect(params.logN).to.be.within(8, 20);
            expect(params.r).to.equal(8);
            expect(params.p).to.equal(1);
        });

        it('Picks params with default maxmem/maxmemfrac', async function() {
            const params = Scrypt.pickParams(0.1);
            expect(params).to.have.all.keys('logN', 'r', 'p');
            expect(params.logN).to.be.within(8, 20);
            expect(params.r).to.equal(8);
            expect(params.p).to.equal(1);
        });

        it('Picks params with 0 maxmem', async function() {
            const params = Scrypt.pickParams(0.1, 0);
            expect(params.logN).to.be.within(8, 20);
        });

        it('Picks params with 0 maxmemfrac', async function() {
            const params = Scrypt.pickParams(0.1, 0, 0);
            expect(params.logN).to.be.within(8, 20);
        });

        it('Picks params setting N based on memory limit', async function() {
            const params = Scrypt.pickParams(1, 1024, 0.1);
            expect(params.logN).to.be.within(8, 20);
            expect(params.p).to.be.above(1);
        });
    });

    describe('Error checking', function() {

        describe('kdf errors', function() {
            it('throws on numeric passphrase', () => Scrypt.kdf(99)
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Passphrase must be a string, TypedArray, or Buffer')));
            it('throws on no params', () => Scrypt.kdf(password)
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Params must be an object')));
            it('throws on bad params', () => Scrypt.kdf(password, null)
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Params must be an object')));
            it('throws on bad params', () => Scrypt.kdf(password, false)
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Params must be an object')));
            it('throws on bad params', () => Scrypt.kdf(password, 99)
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Params must be an object')));
            it('throws on bad params', () => Scrypt.kdf(password, 'bad params')
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Params must be an object')));
            it('throws on bad logN', () => Scrypt.kdf(password, { logN: 'bad' })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Parameter logN must be an integer; received bad')));
            it('throws on zero logN', () => Scrypt.kdf(password, { logN: 0 })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Parameter logN must be between 1 and 30; received 0')));
            it('throws on non-integer logN', () => Scrypt.kdf(password, { logN: 12.12 })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Parameter logN must be an integer; received 12.12')));
            it('throws on non-integer r', () => Scrypt.kdf(password, { logN: 12,  r: 8.8 })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Parameter r must be a positive integer; received 8.8')));
            it('throws on non-integer p', () => Scrypt.kdf(password, { logN: 12,  p: 1.1 })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Parameter p must be a positive integer; received 1.1')));
            it('throws on 0 r', () => Scrypt.kdf(password, { logN: 12,  r: 0 })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Parameter r must be a positive integer; received 0')));
            it('throws on 0 p', () => Scrypt.kdf(password, { logN: 12,  p: 0 })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Parameter p must be a positive integer; received 0')));
            it('throws on out-of-range r', () => Scrypt.kdf(password, { logN: 12,  r: 2**30 })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Parameters p*r must be <= 2^30-1')));
            it('throws on out-of-range p', () => Scrypt.kdf(password, { logN: 12,  p: 2**30 })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Parameters p*r must be <= 2^30-1')));
            it('throws on EVP PBE memory limit exceeded', () => Scrypt.kdf(password, { logN: 12,  r: 2**20 })
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.match(/EVP_PBE_scrypt:memory limit exceeded$/)));
        });

        describe('verify errors', function() {
            it('throws on bad passphrase type', async () => Scrypt.verify(await Scrypt.kdf(password, { logN: 12 }), null)
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Passphrase must be a string, TypedArray, or Buffer')));
            it('throws on bad key type', () => Scrypt.verify(null, 'passwd')
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Key must be a Buffer')));
            it('throws on bad key', () => Scrypt.verify(Buffer.from('key', 'base64'), 'passwd')
                .then(() => { throw new Error('Test should fail'); })
                .catch(error => expect(error.message).to.equal('Invalid key')));
            it('fails to verify on checksum failure', async () => {
                const key = await Scrypt.kdf(password, { logN: 12 });
                key[7] = 11; // patch logN to new value
                expect(Scrypt.viewParams(key)).to.deep.equal({ logN: 11, r: 8, p: 1 });
                expect(await Scrypt.verify(key, password)).to.be.false;
            });
        });

        describe('viewParams errors', function() { // note Scrypt.viewParams is not async
            it('throws on null key', () => expect(() => Scrypt.viewParams(null)).to.throw(TypeError, 'Key must be a Buffer'));
            it('throws on numeric key', () => expect(() => Scrypt.viewParams(99)).to.throw(TypeError, 'Key must be a Buffer'));
            it('throws on invalid key', () => expect(() => Scrypt.viewParams(Buffer.from('bad key', 'base64'))).to.throw(RangeError, 'Invalid key'));
        });

    });
});
