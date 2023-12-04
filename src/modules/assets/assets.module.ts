import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { assetProviders } from './assets.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { AssetSequelize } from './infra/asset.model';

@Module({
  controllers: [AssetsController],
  imports: [SequelizeModule.forFeature([AssetSequelize])],
  providers: [AssetsService, ...assetProviders],
})
export class AssetsModule {}
