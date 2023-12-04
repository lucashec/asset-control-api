import { Module } from '@nestjs/common';
import { IncidentUpdatesService } from './incident-updates.service';
import { IncidentUpdatesController } from './incident-updates.controller';

@Module({
  controllers: [IncidentUpdatesController],
  providers: [IncidentUpdatesService]
})
export class IncidentUpdatesModule {}
