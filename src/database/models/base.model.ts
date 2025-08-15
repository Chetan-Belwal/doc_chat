import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  UpdatedAt,
} from 'sequelize-typescript';

export class BaseModel<T> extends Model<T> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare public id: number;

  @CreatedAt
  @Column(DataType.DATE)
  public created_at: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  public updated_at: Date;
}
