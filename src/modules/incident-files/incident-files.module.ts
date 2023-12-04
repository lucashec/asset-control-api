import { Module } from '@nestjs/common';
import { IncidentFilesService } from './incident-files.service';
import { IncidentFilesController } from './incident-files.controller';

@Module({
  controllers: [IncidentFilesController],
  providers: [IncidentFilesService]
})
export class IncidentFilesModule {}
