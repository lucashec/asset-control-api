import { Module } from '@nestjs/common';
import { AssetStatusesService } from './asset-statuses.service';
import { AssetStatusesController } from './asset-statuses.controller';

@Module({
  controllers: [AssetStatusesController],
  providers: [AssetStatusesService]
})
export class AssetStatusesModule {}
