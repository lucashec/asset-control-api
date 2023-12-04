import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidentFilesService } from './incident-files.service';
import { CreateIncidentFileDto } from './dto/create-incident-file.dto';
import { UpdateIncidentFileDto } from './dto/update-incident-file.dto';

@Controller('incident-files')
export class IncidentFilesController {
  constructor(private readonly incidentFilesService: IncidentFilesService) {}

  @Post()
  create(@Body() createIncidentFileDto: CreateIncidentFileDto) {
    return this.incidentFilesService.create(createIncidentFileDto);
  }

  @Get()
  findAll() {
    return this.incidentFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncidentFileDto: UpdateIncidentFileDto) {
    return this.incidentFilesService.update(+id, updateIncidentFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentFilesService.remove(+id);
  }
}
