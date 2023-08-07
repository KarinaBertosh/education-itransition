export class Menu {
  steps = {};
  menu = ['Available moves: '];

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

  renderStepUser(command) {
    if (this.steps[`${command}`]) {
      return this.steps[`${command}`];
    }
    switch (command) {
      case '0':
        console.log('Game over!');
        process.exit();
      case '?':
        console.log('help');
    }
  }

  renderStepRandom() {
    this.create();
    const randomKey = Math.floor(Math.random() * (this.args.length - 1)) + 1;
    return this.steps[`${randomKey}`];
  }
}
