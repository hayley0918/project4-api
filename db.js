const Pool = require('pg').Pool

const pool = new Pool({
    database: 'bootfinds'
})

module.exports = pool