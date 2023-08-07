import readline from 'readline';
import { Menu } from './modules/menu/menu.js';
import { Computer } from './modules/Computer/computer.js';

export class App {
  computer = new Computer();
  constructor(args) {
    this.args = args;
    this.menu = new Menu(this.args);
  }

  enterMove() {
    console.log('Enter your move: ');
  }

  yourMove(step) {
    console.log(`Your move: ${step}`);
  }

  async start() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.computer.getHmac();
    this.menu.render();
    this.enterMove();

    rl.on('line', async (command) => {
      const step = this.menu.renderStep(command);
      if (!step) this.menu.render();
      this.yourMove(step);
    });
  }
}
