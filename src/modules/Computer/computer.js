import { Hmac } from '../hmac/hmac.js';

export class Computer {
  secureHmac = new Hmac();
  hmac = this.secureHmac.create();

  getHmac() {
    console.log(`HMAC: ${this.hmac}`);
  }
}
