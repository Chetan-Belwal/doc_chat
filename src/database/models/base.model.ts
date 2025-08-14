import {
  AutoIncrement,
  Column,
  CreatedAt,
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
  declare public created_at: Date;

  @UpdatedAt
  declare public updated_at: Date;
}
