const db = require('../db')

function getAllItems() {
  return db.query('select * from items;')
}

function createItemPost(params) {
  return db.query('insert into items (seller_id, item_name, item_type, quantity, price, image_url, item_detail) values ($1, $2, $3, $4, $5, $6, $7);', [params.seller_id, params.item_name, params.item_type, params.quantity, params.price, params.image_url, params.item_detail])
}

function findOneItemById(id) {
    return db.query('select * from items where id = $1;', [id])
}

function findItemsFromUser(seller_id){
    return db.query('select * from items where seller_id = $1;', [seller_id])
}

function updateItem(params){
    return db.query('update items set item_name = $1, item_type = $2, quantity = $3, price = $4, image_url = $5, item_detail = $6 where id = $7;', [params.item_name, params.item_type, params.quantity, params.price, params.image_url, params.item_detail, params.id])
}

function deleteItem(id){
    return db.query('delete from items where id = $1', [id])
}

module.exports = {
  getAllItems: getAllItems,
  createItemPost: createItemPost,
  findOneItemById: findOneItemById,
  findItemsFromUser: findItemsFromUser,
  updateItem: updateItem,
  deleteItem: deleteItem
}