import { Test, TestingModule } from '@nestjs/testing';
import { IncidentUpdatesService } from './incident-updates.service';

describe('IncidentUpdatesService', () => {
  let service: IncidentUpdatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncidentUpdatesService],
    }).compile();

    service = module.get<IncidentUpdatesService>(IncidentUpdatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
