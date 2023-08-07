import { Hmac } from '../hmac/hmac.js';
import { Menu } from '../menu/menu.js';

export class Computer {
  secureHmac = new Hmac();
  hmac = this.secureHmac.create(this.step);

  makeMove(args) {
    this.menu = new Menu(args);
    this.step = this.menu.renderStepRandom();
  }

  getHmac() {
    console.log(`HMAC: ${this.hmac}`);
  }

  getStep() {
    console.log(`Computer move: ${this.step}`);
  }
}
