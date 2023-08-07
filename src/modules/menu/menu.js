export class Menu {
  steps = {};
  menu = ['Available moves: '];

  constructor(args) {
    this.args = args;
  }

  render() {
    this.args.forEach((e, i) => {
      this.menu.push(`${i + 1} - ${e}`);
      this.steps[`${i + 1}`] = e;
    });

    this.menu.push('0 - exit');
    this.menu.push('? - help');

    return this.menu.join('\n');
  }

  renderStep(command) {
    if (this.steps[`${command}`]) {
      return this.steps[`${command}`];
    }
  }
}
