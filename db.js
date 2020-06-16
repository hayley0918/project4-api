const Pool = require('pg').Pool

let pool;

if (process.env.PRODUCTION) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
} else {
  pool = new Pool({
    database: 'bootfinds',
    user: 'minkyungchoi',
    password: 'hello',
  })
}

module.exports = pool