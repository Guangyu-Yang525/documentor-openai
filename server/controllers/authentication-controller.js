import express from "express";
import { pool } from "../db/db.js";
import { bcryptComparePassword, bcryptEncryption } from "../utils/bcrypt-untils.js";
import { jwtGenerator } from "../utils/JWT-generator.js";

export const auth = express.Router();

/**
 * Author: Guangyu Yang
 * 
 * controller for authentication
 */


auth.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;

        const checkEmailUsedQuery = `
            select * from users where user_email = $1
        `;
        const userExists = await pool.query(checkEmailUsedQuery, [email]);
        if (userExists.rows.length > 0) {
            res.status(500).send({
                error: true,
                message: "email has been registered",
            });
            return
        }

        const hashedPassword = await bcryptEncryption(password)

        const insertUserQuery = `
            insert into users (user_name, user_email, user_password)
            values ($1, $2, $3) returning user_id
        `;

        const response = await pool.query(insertUserQuery, [username, email, hashedPassword]);

        const { user_id } = response.rows[0]

        const payload = {
            user_id,
            username,
            email
        }

        const jwtToken = jwtGenerator(payload)
        res.status(200).send({
            access_token: jwtToken,
        });
    } catch (error) {
        res.status(500).send({
            error,
        });
    }
});


auth.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const checkEmailUsedQuery = `
            select * from users where user_email = $1
        `;
        const userExists = await pool.query(checkEmailUsedQuery, [email]);
        if (!userExists.rows.length > 0) {
            res.status(500).send({
                error: true,
                message: "email has not been registered yet",
            });
            return
        }

        const passwordIsCorrect = await bcryptComparePassword(password, userExists.rows[0].user_password)
        if (!passwordIsCorrect) {
            res.status(401).send({
                error: true,
                message: "incorrect password"
            })
            return
        }
        const credentials = userExists.rows[0]
        const jwtToken = jwtGenerator(credentials)
        res.status(200).send({
            access_token: jwtToken,
        });
    } catch (error) {
        res.status(500).send({
            error,
        });
    }
});