const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '123@Navgurukul',
        database: 'mydatabase'
    }
}

const knex = require('knex')(options);

knex.from('cars').select("*")
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['id']} ${row['name']} ${row['price']}`);
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });