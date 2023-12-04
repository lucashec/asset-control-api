import { Asset } from './entities/asset.entity';

export interface IAssetRepository {
  create(asset: Asset): Promise<Asset>;
  findAll(): Promise<Asset[]>;
  findOne(idAsset: string): Promise<Asset>;
}
