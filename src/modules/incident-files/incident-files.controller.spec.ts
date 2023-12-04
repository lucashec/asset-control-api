import { Test, TestingModule } from '@nestjs/testing';
import { IncidentFilesController } from './incident-files.controller';
import { IncidentFilesService } from './incident-files.service';

describe('IncidentFilesController', () => {
  let controller: IncidentFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentFilesController],
      providers: [IncidentFilesService],
    }).compile();

    controller = module.get<IncidentFilesController>(IncidentFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
