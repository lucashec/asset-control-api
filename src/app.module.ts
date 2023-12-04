import { Module } from '@nestjs/common';
import { AssetsModule } from './modules/assets/assets.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { StatusesModule } from './modules/statuses/statuses.module';
import { AssetStatusesModule } from './modules/asset-statuses/asset-statuses.module';
import { IncidentsModule } from './modules/incidents/incidents.module';
import { IncidentUpdatesModule } from './modules/incident-updates/incident-updates.module';
import { BillsModule } from './modules/bills/bills.module';
import { FilesModule } from './modules/files/files.module';
import { BillFilesModule } from './modules/bill-files/bill-files.module';
import { IncidentFilesModule } from './modules/incident-files/incident-files.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AssetsModule,
    CategoriesModule,
    StatusesModule,
    AssetStatusesModule,
    IncidentsModule,
    IncidentUpdatesModule,
    BillsModule,
    FilesModule,
    BillFilesModule,
    IncidentFilesModule,
  ],
})
export class AppModule {}
