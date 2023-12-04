import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetStatusesService } from './asset-statuses.service';
import { CreateAssetStatusDto } from './dto/create-asset-status.dto';
import { UpdateAssetStatusDto } from './dto/update-asset-status.dto';

@Controller('asset-statuses')
export class AssetStatusesController {
  constructor(private readonly assetStatusesService: AssetStatusesService) {}

  @Post()
  create(@Body() createAssetStatusDto: CreateAssetStatusDto) {
    return this.assetStatusesService.create(createAssetStatusDto);
  }

  @Get()
  findAll() {
    return this.assetStatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetStatusesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetStatusDto: UpdateAssetStatusDto) {
    return this.assetStatusesService.update(+id, updateAssetStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetStatusesService.remove(+id);
  }
}
