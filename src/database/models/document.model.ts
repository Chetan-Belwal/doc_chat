import { Column } from 'sequelize-typescript';
import { BaseModel } from './base.model';

export class DocumentModel extends BaseModel<DocumentModel> {
  @Column
  name: string;

  @Column
  path: string;
}
