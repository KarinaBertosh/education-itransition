import { Game } from '../Game/game.js';
import { Menu } from '../Menu/menu.js';

export class RatesTable {
  render(args) {
    this.menu = new Menu(args);
    this.steps = this.menu.getSteps();
    console.table(this.steps);
  }
}
