/**
 * Author: Guangyu Yang
 * 
 * Connecting express backend to PostgreSQL database
 */


import pkg from 'pg'
const { Pool } = pkg

export const pool = new Pool ({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
})

