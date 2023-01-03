import express from "express";
import { pool } from "../db/db.js";
import { authorization } from "../middleware/authorization.js";

/**
 * Author: Guangyu Yang
 *
 * controller for document operations
 */

export const document = express.Router();

document.use(authorization);

document.post("/add", async (req, res) => {
    try {
        const { doc_title, doc_content } = req.body;
        const { user_id } = req.user;
        const insertDocQuery = `
        insert into documents (doc_title, doc_content, doc_created_at, doc_updated_at, doc_creator)
        values ($1, $2, $3, $4, $5)
        `;
        const currentTime = new Date();
        await pool.query(insertDocQuery, [
            doc_title,
            doc_content,
            currentTime,
            currentTime,
            user_id,
        ]);
        res.status(200).send({
            message: "document created",
        });
    } catch (error) {
        res.status(500).send({ error });
    }
});

document.get("/all", async (req, res) => {
    try {
        const { user_id } = req.user;
        const selectDocQuery = `
            select * from documents where doc_creator = $1
        `;
        const response = await pool.query(selectDocQuery, [user_id]);
        res.status(200).send({
            documents: response.rows,
        });
    } catch (error) {
        res.status(500).send({ error });
    }
});

document.get("/search", async (req, res) => {
    try {
        const { keyword } = req.query
        const { user_id } = req.user;
        if (!keyword) {
            res.status(200).send({
                results: []
            })
            return
        } 
        const searchQuery = `
            select * from documents
            where (doc_creator = $1) 
            and (doc_title ilike $2 or doc_content ilike $2) 
        `
        const searchString = '%' + keyword + '%'
        const response = await pool.query(searchQuery, [user_id, searchString])
        res.status(200).send({
            results: response.rows
        })
    } catch (error) {
        res.status(500).send({ error });
    }
});

document.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const selectOneDocQuery = `
            select * from documents where doc_id = $1
        `;
        const response = await pool.query(selectOneDocQuery, [id]);
        res.status(200).send(response.rows[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
});

document.delete("/:id", async (req, res) => {
    try {
        const { user_id } = req.user;
        const { id } = req.params;
        const deleteDocumentQuery = `
            delete from documents where doc_id = $1 and doc_creator = $2 
        `;
        await pool.query(deleteDocumentQuery, [id, user_id]);
        res.status(200).send({
            message: "document deleted",
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({ error });
    }
});

document.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { user_id } = req.user;
        const { doc_title, doc_content } = req.body;
        const updateDocumentQuery = `
            update documents set doc_title = $1, doc_content = $2 
            where doc_id = $3 and doc_creator = $4
        `;
        await pool.query(updateDocumentQuery, [
            doc_title,
            doc_content,
            id,
            user_id,
        ]);

        res.status(200).send({
            message: "document updated",
        });
    } catch (error) {
        res.status(500).send({ error });
    }
});
