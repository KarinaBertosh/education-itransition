import { App } from './src/app.js';
import { Error } from './src/error/error.js';

const args = process.argv.slice(2);
const error = new Error();
const isUnique = error.checkUnique(args);
const isAllConditions = error.checkAllCondition(args, isUnique);
const app = new App(args);

if (isAllConditions) await app.start();

