import { Column, Table } from 'sequelize-typescript';
import { BaseModel } from './base.model';

@Table({ tableName: 'documents' })
export class DocumentModel extends BaseModel<DocumentModel> {
  @Column
  public name: string;

  @Column
  public path: string;
}
