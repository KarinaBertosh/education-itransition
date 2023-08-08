export class RatesTable {
  render(args) {
    const renderTable = (rows, columns) => {
      var arr = {};

      args.forEach((e, ind) => {
        args.forEach((i, index) => {
          arr[i] = new Array();
          args.forEach((j, index) => {
            i === j
              ? (arr[i][j] = 'Draw')
              : i > j && i != j
              ? (arr[i][j] = 'Lose')
              : (arr[i][j] = 'Win');
          });
        });
      });

      return arr;
    };

    const table = renderTable(args.length, args.length);
    console.table(table);
  }
}
