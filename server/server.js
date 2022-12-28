import express from "express";
import cors from 'cors';
import { functionality } from "./controllers/functionality-controller.js";
import { pool } from "./db/db.js";
import { schema } from "./db/schema.js";
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

//grammar controller
app.use('/func', functionality)

app.listen(5001, () => {
    pool.query(schema)
    console.log("Listening on 5001")
})