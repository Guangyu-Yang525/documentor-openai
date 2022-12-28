import pkg from 'pg'
const { Pool } = pkg

export const pool = new Pool ({
    user: "yangguangyu",
    host: "localhost",
    port: 5432,
    database: "documentor"
})

