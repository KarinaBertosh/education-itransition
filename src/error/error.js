import { typesError } from '../utils/type.js';

export class Error {
  example = 'Сommand example: node index.js apple dog water';

  constructor(type) {
    this.type = type;
  }

  renderError = (type) => {
    switch (type) {
      case typesError.length:
        console.log(
          `Error: the number of strings passed must be 3 or greater than 3.\n${this.example}`
        );
        break;

      case typesError.even:
        console.log(
          `Error: the number of lines passed must be odd.\n${this.example}`
        );
        break;

      case typesError.unique:
        console.log(
          `Error: the number of strings passed must not be repeated. \n${this.example}`
        );
        break;
    }
  };

  checkUnique = (args) => {
    let result = [];

    args.forEach((str) => {
      if (!result.includes(str)) {
        result.push(str);
      }
    });

    return result.length === args.length ? true : false;
  };

  checkAllCondition(args, isUnique) {
    switch (true) {
      case args.length < 3:
        this.renderError(typesError.length);
        return false;
      case args.length % 2 === 0:
        this.renderError(typesError.even);
        return false;
      case !isUnique:
        this.renderError(typesError.unique);
        return false;
      default:
        return true;
    }
  }
}
