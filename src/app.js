import readline from 'readline';

export class App {
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
