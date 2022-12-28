import { openai } from "../utils/open-ai-configure.js";
import { SERVICE_TYPES } from "./services-types.js";

/**
 * Author: Guangyu Yang
 * 
 * services for adjusting the metaparameters based on service type
 * connecting to open ai API to get back results
 */

const adjustMetaparameter = (type, metaparameters) => {
  switch (type) {
    case SERVICE_TYPES.GRAMMAR_CORRECTION:
      return { ...metaparameters, top_p: 1, max_tokens: 60 };
    case SERVICE_TYPES.KEYWORDS:
      return {
        ...metaparameters,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0.8,
      };
    case SERVICE_TYPES.SUMMARIZE:
        return {
            ...metaparameters,
            temperature: 0.7,
            max_tokens: 64,
            top_p: 1
        }
    case SERVICE_TYPES.ESSAY_OUTLINE:
        return {
            ...metaparameters,
            temperature: 0.3,
            max_tokens: 150, 
            top_p: 1
        }
    default:
      return { ...metaparameters };
  }
};

const defaultMetaparameters = {
  temperature: 0,
  max_tokens: 0,
  top_p: 0,
  frequency_penalty: 0,
  presence_penalty: 0,
};

export const documentService = async (type, prompt) => {
  const metaparameters = adjustMetaparameter(type, defaultMetaparameters);
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${type} ${prompt}`,
      ...metaparameters,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
