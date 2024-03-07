const pg = require('pg');

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL ,
})
pool.connect((error)=>{
    if(error) throw error
    console.log("connection succesfull !! ")
})
module.exports  = pool;