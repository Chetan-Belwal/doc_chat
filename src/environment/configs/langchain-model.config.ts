import { LangchainModel } from '../interfaces/langchainModel';

export const langchainModelConfig = () => ({
  langchainConfig: {
    ollamaEmbeddings: {
      url: process.env.OLLAMA_URL,
      apiKey: process.env.OLLAMA_API_KEY,
      modelName: process.env.OLLAMA_MODEL_NAME,
    },
  } as LangchainModel,
});
