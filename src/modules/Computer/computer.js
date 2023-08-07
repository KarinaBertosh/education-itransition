import { Hmac } from '../Hmac/hmac.js';
import { Menu } from '../Menu/menu.js';

export class Computer {
  hmac = new Hmac();

  makeMove(args) {
    this.menu = new Menu(args);
    this.step = this.menu.renderStepRandom();
  }

  getHmac() {
    console.log(`HMAC: ${this.hmac.create(this.step)}`);
  }

  getStep() {
    console.log(`Computer move: ${this.step}`);
    return this.step;
  }
}
