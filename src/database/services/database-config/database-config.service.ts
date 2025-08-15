import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { modelsCollection } from '../models-collection';

@Injectable()
export class DatabaseConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  createSequelizeOptions(
    connectionName?: string,
  ): Promise<SequelizeModuleOptions> | SequelizeModuleOptions {
    const config = this.configService.get<SequelizeModuleOptions>(
      `databases.${connectionName}`,
    );

    config.models = modelsCollection;

    return config;
  }
}
