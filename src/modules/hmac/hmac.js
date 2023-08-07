import crypto from 'crypto';
import { Key } from '../key/key.js';

export class Hmac {
  secureKey = new Key();
  key = this.secureKey.create();
  hmac;
  step;

  create(step) {
    this.step = step;
    this.hmac = crypto
      .createHmac('sha3-512', this.key)
      .update(`${this.step}`)
      .digest('hex');
    return this.hmac;
  }

  getKey() {
    return console.log(`HMAC key: ${this.key}`);
  }
}
