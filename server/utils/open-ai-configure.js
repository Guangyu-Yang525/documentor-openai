import { Configuration, OpenAIApi } from 'openai'
import * as dotenv from 'dotenv'

/**
 * Author: Guangyu Yang
 * 
 * configuration of openai third-party APIS
 */


dotenv.config();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

export const openai = new OpenAIApi(config)