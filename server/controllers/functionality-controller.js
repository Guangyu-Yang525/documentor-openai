import express from 'express'
import { documentService } from '../services/open-ai-service.js'
import { SERVICE_TYPES } from '../services/services-types.js'

/**
 * Author: Guangyu Yang
 * 
 * controller for open AI related functionality
 */

export const functionality = express.Router()

functionality.get("/", async(req, res) => {
    res.status(200).send({
        "message": "hello from router"
    })
})

//protect these routes via JWT later 
functionality.post("/grammar-correction", async(req, res) => {
    const { prompt } = req.body
    try {
        const response = await documentService(SERVICE_TYPES.GRAMMAR_CORRECTION, prompt)
        res.status(200).send({
            corrected_text: response.data.choices[0].text
        })
    } catch (error) {
        res.status(500).send({ error })        
    }
})

functionality.post("/keywords-extraction", async(req, res) => {
    const { prompt } = req.body
    try {
        const response = await documentService(SERVICE_TYPES.KEYWORDS, prompt)
        res.status(200).send({
            summary: response.data.choices[0].text
        })
    } catch (error) {
        res.status(500).send({ error })
    }
})

functionality.post('/summarize', async(req, res) => {
    const { prompt } = req.body
    try {
        const response = await documentService(SERVICE_TYPES.SUMMARIZE, prompt)
        res.status(200).send({
            keywords: response.data.choices[0].text
        })
    } catch (error) {
        res.status(500).send({ error })
    }  
})