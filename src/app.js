import readline from 'readline';
import { Key } from './modules/key/key.js';
import { Hmac } from './modules/hmac/hmac.js';

export class App {
  secureKey = new Key();
  secureHmac = new Hmac();
  key = this.secureKey.createKey();
  hmac = this.secureHmac.createHmac();

  constructor(args) {
    this.args = args;
  }

  async start() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', async (command) => {
      console.log(command);
    });
  }
}
