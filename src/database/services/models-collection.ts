import { BaseModel } from '../models/base.model';
import { DocumentEmbeddingModel } from '../models/document-embedding.model';
import { DocumentModel } from '../models/document.model';

export const modelsCollection = [
  BaseModel,
  DocumentModel,
  DocumentEmbeddingModel,
];
