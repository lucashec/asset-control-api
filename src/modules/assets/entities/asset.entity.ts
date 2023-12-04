import { CreateAssetDto } from '../dto/create-asset.dto';

export class Asset {
  constructor(
    dto: CreateAssetDto,
    readonly description: string = dto.description,
    readonly price: string = dto.price,
  ) {}

  static create(dto: CreateAssetDto) {
    return new Asset(dto);
  }
}
