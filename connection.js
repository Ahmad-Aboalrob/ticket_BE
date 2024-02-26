import  pg from 'pg'
const { Pool } = pg


const pool =  new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "ahmad123",
    database: "postgres"
})

export default pool