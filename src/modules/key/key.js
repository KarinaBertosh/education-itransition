import crypto from 'crypto';

export class Key {
  key;

  createKey() {
    this.key = crypto.randomBytes(32).toString('hex');
    return this.key;
  }
}
