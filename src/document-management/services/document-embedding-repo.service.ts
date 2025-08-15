import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DocumentEmbeddingModel } from '../../database/models/document-embedding.model';
import { Transaction } from 'sequelize';

@Injectable()
export class DocumentEmbeddingRepoService {
  constructor(
    @InjectModel(DocumentEmbeddingModel)
    private readonly documentEmbeddingModel: typeof DocumentEmbeddingModel,
  ) {}

  /**
   * Create a new document embedding.
   *
   * @param documentId The ID of the document to associate the embedding with.
   * @param embedding The embedding vector.
   * @param transaction Optional Sequelize transaction object.
   * @returns The created document embedding entity.
   */
  public createEmbedding(
    documentId: number,
    embedding: number[],
    transaction?: Transaction,
  ): Promise<DocumentEmbeddingModel> {
    return this.documentEmbeddingModel.create(
      {
        document_id: documentId,
        embedding,
      },
      {
        transaction,
      },
    );
  }
}
