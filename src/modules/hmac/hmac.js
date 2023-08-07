import crypto from 'crypto';
import { Key } from '../key/key.js';

export class Hmac {
  secureKey = new Key();
  key = this.secureKey.create();
  hmac;
  create() {
    this.hmac = crypto.createHmac('sha3-512', this.key).digest('hex');
    return this.hmac;
  }
}
