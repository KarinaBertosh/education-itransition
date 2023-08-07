import mysql from 'mysql2';

export class RatesTable {
  render(args) {
    this.stepUser = args;
    this.stepComp = args;

    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'karina2002',
      database: 'msDb',
    });

    connection.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        const sql =
          'CREATE TABLE IF NOT EXISTS myTable (id int, name varchar(10))';
        connection.query(sql, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log('connected');
          }
        });
      }
    });
  }
}
