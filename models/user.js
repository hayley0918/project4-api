const db = require('../db')

function createUser(params) {
    return db.query('insert into users (username, email, digested_password, st_number, address_street, address_suburb, address_state, postcode) values( $1, $2, $3, $4, $5, $6, $7, $8);', [params.username, params.email, params.digested_password, params.st_number, params.address_street, params.address_suburb, params.address_state, params.postcode ])
}

function getUserById(id) {
    return db.query('select * from users where id = $1;', [id])
}

function getUserByEmail(email){
    return db.query('select * from users where email = $1;', [email])
}

module.exports = {
  createUser: createUser,
  getUserById: getUserById,
  getUserByEmail: getUserByEmail
}