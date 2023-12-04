import { Module } from '@nestjs/common';
import { BillFilesService } from './bill-files.service';
import { BillFilesController } from './bill-files.controller';

@Module({
  controllers: [BillFilesController],
  providers: [BillFilesService]
})
export class BillFilesModule {}
