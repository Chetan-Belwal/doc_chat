import { Global, Module } from '@nestjs/common';
import { DatabaseConfigService } from './services/database-config/database-config.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DbConnectionNames } from '../common/enums/DbConnectionNames';
import { ConfigModule } from '@nestjs/config';
import { modelsCollection } from './services/models-collection';

@Global()
@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useClass: DatabaseConfigService,
      name: DbConnectionNames.DEFAULT,
      inject: [ConfigModule],
    }),

    SequelizeModule.forFeature(modelsCollection),
  ],
  providers: [DatabaseConfigService],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
