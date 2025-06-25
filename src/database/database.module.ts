import { Module } from '@nestjs/common';
import { DatabaseConfigService } from './services/database-config/database-config.service';

@Module({
  providers: [DatabaseConfigService],
})
export class DatabaseModule {}
