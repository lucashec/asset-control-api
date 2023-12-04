import { Test, TestingModule } from '@nestjs/testing';
import { IncidentUpdatesController } from './incident-updates.controller';
import { IncidentUpdatesService } from './incident-updates.service';

describe('IncidentUpdatesController', () => {
  let controller: IncidentUpdatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncidentUpdatesController],
      providers: [IncidentUpdatesService],
    }).compile();

    controller = module.get<IncidentUpdatesController>(IncidentUpdatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
