import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillFilesService } from './bill-files.service';
import { CreateBillFileDto } from './dto/create-bill-file.dto';
import { UpdateBillFileDto } from './dto/update-bill-file.dto';

@Controller('bill-files')
export class BillFilesController {
  constructor(private readonly billFilesService: BillFilesService) {}

  @Post()
  create(@Body() createBillFileDto: CreateBillFileDto) {
    return this.billFilesService.create(createBillFileDto);
  }

  @Get()
  findAll() {
    return this.billFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBillFileDto: UpdateBillFileDto) {
    return this.billFilesService.update(+id, updateBillFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billFilesService.remove(+id);
  }
}
