import { Injectable } from '@nestjs/common';
import { CreateAssetStatusDto } from './dto/create-asset-status.dto';
import { UpdateAssetStatusDto } from './dto/update-asset-status.dto';

@Injectable()
export class AssetStatusesService {
  create(createAssetStatusDto: CreateAssetStatusDto) {
    return 'This action adds a new assetStatus';
  }

  findAll() {
    return `This action returns all assetStatuses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assetStatus`;
  }

  update(id: number, updateAssetStatusDto: UpdateAssetStatusDto) {
    return `This action updates a #${id} assetStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} assetStatus`;
  }
}
