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

// to display the seller location in the item card

function joinUserAndItemTable(){
    return db.query('select users.address_suburb, users.address_state, items.image_url, items.item_name, items.price, items.id from users inner join items on users.id = items.seller_id;')
}

// for single item detail
function singleItemJoinUserAndItemTable(id){
    return db.query('select users.email, users.st_number, users.address_street, users.address_suburb, users.address_state, users.postcode, items.image_url, items.price, items.item_name, items.item_type, items.quantity, items.item_detail, items.id from users inner join items on users.id = items.seller_id where items.id = $1;', [id])
}

module.exports = {
  createUser: createUser,
  getUserById: getUserById,
  getUserByEmail: getUserByEmail,
  joinUserAndItemTable: joinUserAndItemTable,
  singleItemJoinUserAndItemTable: singleItemJoinUserAndItemTable
}