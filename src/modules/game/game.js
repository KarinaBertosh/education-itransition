export class Game {
  constructor(stepUser, stepComputer) {
    this.stepUser = stepUser;
    this.stepComputer = stepComputer;
  }

  getResult(steps) {
    this.steps = steps;

    const indexStepUser = this.getIndexStep(this.stepUser);
    const indexStepComp = this.getIndexStep(this.stepComputer);

    indexStepUser > indexStepComp
      ? console.log('You Win')
      : indexStepUser === indexStepComp
      ? console.log('You have a draw')
      : console.log('You Lose');
  }

  getIndexStep(entity) {
    return Object.keys(this.steps).find((key) => this.steps[key] === entity);
  }

  goodbye() {
    console.log('Game over');
    process.exit();
  }
}
