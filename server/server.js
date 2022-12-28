import express from "express";
import cors from 'cors';
import { functionality } from "./controllers/functionality-controller.js";
import { pool } from "./db/db.js";
import { schema } from "./db/schema.js";
import { auth } from "./controllers/authentication-controller.js";
/**
 * Author: Guangyu Yang
 * 
 * main file for backend server
 */

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

app.get('/', async(req, res) => {
    res.status(200).send({
        message: "Hello!"
    })
})

//authentication controller
app.use('/auth', auth)

//functionality controller
app.use('/func', functionality)


app.listen(5001, () => {
    pool.query(schema)
    console.log("Listening on 5001")
})