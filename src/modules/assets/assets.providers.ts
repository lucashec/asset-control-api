import { Tokens } from 'src/core/database/repositories.token';
import { AssetRepository } from './infra/asset.repository';

export const assetProviders = [
  {
    provide: Tokens.ASSETS_REPOSITORY,
    useClass: AssetRepository,
  },
];
