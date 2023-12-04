import { Injectable } from '@nestjs/common';
import Repository from 'src/core/orm/sequelize.repository';
import { IAssetRepository } from '../assets.repositories';
import { Asset } from '../entities/asset.entity';
import { AssetSequelize } from './asset.model';

@Injectable()
export class AssetRepository extends Repository implements IAssetRepository {
  constructor() {
    super(AssetSequelize);
  }
  async create(asset: Asset): Promise<Asset> {
    return (await this.model.create({ ...asset })).toJSON();
  }
  async findAll(): Promise<Asset[]> {
    return (await this.model.findAll()).map((e) => e.toJSON());
  }
  async findOne(idAsset: string): Promise<Asset> {
    return (await this.model.findOne({ where: { idAsset } })).toJSON();
  }
}
