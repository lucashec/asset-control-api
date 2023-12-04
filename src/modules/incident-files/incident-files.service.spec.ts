import { Test, TestingModule } from '@nestjs/testing';
import { IncidentFilesService } from './incident-files.service';

describe('IncidentFilesService', () => {
  let service: IncidentFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncidentFilesService],
    }).compile();

    service = module.get<IncidentFilesService>(IncidentFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
