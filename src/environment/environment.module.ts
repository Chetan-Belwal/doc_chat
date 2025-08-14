import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { sequelizeConfig } from './configs/sequelize-config';
import { langchainModelConfig } from './configs/langchain-model.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [sequelizeConfig, langchainModelConfig],
    }),
  ],
})
export class EnvironmentModule {}
