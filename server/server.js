import express from "express";
import cors from 'cors';
import { functionality } from "./controllers/functionality-controller.js";
import { pool } from "./db/db.js";
import { schema } from "./db/schema.js";
import { auth } from "./controllers/authentication-controller.js";
import { document } from "./controllers/document-controller.js";
/**
 * Author: Guangyu Yang
 * 
 * main function for backend server
 */

const app = express()

//whole app level middlewares
app.use(cors())
app.use(express.json())

//authentication controller
app.use('/auth', auth)

//functionality controller
app.use('/func', functionality)

//documents controller
app.use('/document', document)

app.listen(5001, () => {
    pool.query(schema)
    console.log("Listening on 5001")
})