import { Test, TestingModule } from '@nestjs/testing';
import { AssetStatusesService } from './asset-statuses.service';

describe('AssetStatusesService', () => {
  let service: AssetStatusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetStatusesService],
    }).compile();

    service = module.get<AssetStatusesService>(AssetStatusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
