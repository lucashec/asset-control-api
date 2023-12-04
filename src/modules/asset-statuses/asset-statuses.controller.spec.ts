import { Test, TestingModule } from '@nestjs/testing';
import { AssetStatusesController } from './asset-statuses.controller';
import { AssetStatusesService } from './asset-statuses.service';

describe('AssetStatusesController', () => {
  let controller: AssetStatusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetStatusesController],
      providers: [AssetStatusesService],
    }).compile();

    controller = module.get<AssetStatusesController>(AssetStatusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
