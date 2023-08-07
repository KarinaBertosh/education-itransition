import readline from 'readline';
import { Menu } from './modules/menu/menu.js';
import { Computer } from './modules/Computer/computer.js';
import { Game } from './modules/game/game.js';

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

    this.computer.makeMove(this.args);
    const currentHmac = this.computer.getHmac();
    this.menu.render();
    this.enterMove();

    rl.on('line', async (command) => {
      const stepUser = this.menu.renderStepUser(command);
      if (stepUser) {
        this.yourMove(stepUser);
        const stepComputer = this.computer.getStep();
        this.game = new Game(stepUser, stepComputer);
        this.game.getResult(this.menu.steps);
      } else {
        this.menu.render();
      }
    });
  }
}
