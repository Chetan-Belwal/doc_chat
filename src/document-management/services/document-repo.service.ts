import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DocumentModel } from '../../database/models/document.model';
import { Transaction } from 'sequelize';
import { LangchainService } from '../../langchain/langchain.service';
import { DocumentEmbeddingRepoService } from './document-embedding-repo.service';

@Injectable()
export class DocumentRepoService {
  constructor(
    @InjectModel(DocumentModel)
    private readonly documentModel: typeof DocumentModel,
    private readonly langchainService: LangchainService,
    private readonly documentEmbeddingRepo: DocumentEmbeddingRepoService,
  ) {}

  /**
   * Create a new document, generate embeddings, and save to database.
   *
   * @param document The document data with only 'name' and 'path' properties.
   * @param transaction Optional Sequelize transaction object.
   * @returns The created document entity.
   */
  public async handleDocument(
    document: Pick<DocumentModel, 'name' | 'path'>,
    transaction?: Transaction,
  ): Promise<DocumentModel> {
    const doc = await this.documentModel.create(document, { transaction });

    const embedding = await this.langchainService.generateEmbeddings(doc.path);

    await this.documentEmbeddingRepo.createEmbedding(
      doc.id,
      embedding,
      transaction,
    );

    return doc;
  }
}
