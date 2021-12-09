const options = {
    client: 'mysql2',
    connection:{
        host:"127.0.0.1",
        user:"root",
        password:"123@Navgurukul",
        database:"mydatabase"

    }
}

const knex = require('knex')(options);

knex.from('cars').select("name", "price").where('price', '>', '50000')
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['name']} ${row['price']}`);
        }
    })
    .catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
