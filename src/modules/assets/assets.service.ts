import { Inject, Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { Tokens } from 'src/core/database/repositories.token';
import { IAssetRepository } from './assets.repositories';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @Inject(Tokens.ASSETS_REPOSITORY)
    private readonly repository: IAssetRepository,
  ) {}

  async create(dto: CreateAssetDto) {
    return await this.repository.create(Asset.create(dto));
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }
}
