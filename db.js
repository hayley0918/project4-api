const Pool = require('pg').Pool

const pool = new Pool({
    user: 'minkyungchoi',
    database: 'bootfinds',
    port: 5000,
    host: 'localhost'
})

module.exports = pool