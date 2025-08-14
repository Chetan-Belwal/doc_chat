export interface LangchainModel {
  ollamaEmbeddings: OllamaEmbeddingConfig;
}

export interface OllamaEmbeddingConfig {
  url: string;
  apiKey: string;
  modelName: string;
}
