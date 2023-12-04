import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ underscored: true, tableName: 'Assets' })
export class AssetSequelize extends Model {
  @PrimaryKey
  @Column({ defaultValue: DataType.UUIDV4 })
  idAsset: string;

  @Column({ type: DataType.STRING })
  description: string;

  @Column({ type: DataType.DECIMAL(8, 2) })
  price: number;
}
