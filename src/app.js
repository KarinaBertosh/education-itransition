import readline from 'readline';
import { Key } from './modules/key/key.js';
import { Hmac } from './modules/hmac/hmac.js';
import { Menu } from './modules/menu/menu.js';

export class App {
  secureKey = new Key();
  secureHmac = new Hmac();
  key = this.secureKey.create();
  hmac = this.secureHmac.create();

  constructor(args) {
    this.args = args;
    this.menu = new Menu(this.args);
    this.currentMenu = this.menu.render();
  }

  async start() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log(`HMAC: ${this.hmac}`);
    console.log(this.currentMenu);
    console.log('Enter your move: ');

    rl.on('line', async (command) => {
      const step = this.menu.renderStep(command);
      console.log(`Your move: ${step}`);
    });
  }
}
