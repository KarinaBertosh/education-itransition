export class RatesTable {
  render(args) {
    let arr = [
      { 1: 1, firstName: 'John', lastName: 'Smith', height: 180 },
      { 2: 2, firstName: 'Jane', lastName: 'Doe', height: 170 },
    ];

    // let arrNoIndex = arr.reduce((acc, { id, firstName, ...x }) => {
    //   acc[firstName] = x;
    //   return acc;
    // }, {});

    console.table(arr);
  }
}
