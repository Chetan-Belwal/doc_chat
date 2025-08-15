import {
  Column,
  DataType,
  ForeignKey,
  Sequelize,
  Table,
} from 'sequelize-typescript';
import { BaseModel } from './base.model';
import { DocumentModel } from './document.model';
import * as pgvector from 'pgvector/sequelize';

export type SkipValidation<T> = T;

pgvector?.registerType(Sequelize);

@Table({ tableName: 'documents_embeddings' })
export class DocumentEmbeddingModel extends BaseModel<DocumentEmbeddingModel> {
  @Column(DataType.BIGINT)
  @ForeignKey(() => DocumentModel)
  public document_id: number;

  @Column(
    (DataType as never as { VECTOR: (dimension: number) => unknown }).VECTOR(
      2000,
    ),
  )
  public embedding: number[];
}
