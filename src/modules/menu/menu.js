import { Game } from '../Game/game.js';
import { RatesTable } from '../RatesTable/ratesTable.js';

export class Menu {
  steps = {};
  menu = ['Available moves: '];
  game = new Game();

  constructor(args) {
    this.args = args;
  }

  clear() {
    this.menu = ['Available moves: '];
  }

  create() {
    this.clear();
    this.args.forEach((e, i) => {
      this.menu.push(`${i + 1} - ${e}`);
      this.steps[`${i + 1}`] = e;
    });

    this.menu.push('0 - exit');
    this.menu.push('? - help');
  }

  render() {
    this.create();
    console.log(this.menu.join('\n'));
  }

  renderStepUser(cmd) {
    if (this.steps[`${cmd}`] && cmd !== '?') {
      return this.steps[`${cmd}`];
    }
    if (cmd === '0') this.game.closeGame();
  }

  renderStepRandom() {
    this.create();
    const randomKey = Math.floor(Math.random() * (this.args.length - 1)) + 1;
    return this.steps[`${randomKey}`];
  }
}
