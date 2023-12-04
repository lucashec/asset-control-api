import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidentUpdatesService } from './incident-updates.service';
import { CreateIncidentUpdateDto } from './dto/create-incident-update.dto';
import { UpdateIncidentUpdateDto } from './dto/update-incident-update.dto';

@Controller('incident-updates')
export class IncidentUpdatesController {
  constructor(private readonly incidentUpdatesService: IncidentUpdatesService) {}

  @Post()
  create(@Body() createIncidentUpdateDto: CreateIncidentUpdateDto) {
    return this.incidentUpdatesService.create(createIncidentUpdateDto);
  }

  @Get()
  findAll() {
    return this.incidentUpdatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidentUpdatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncidentUpdateDto: UpdateIncidentUpdateDto) {
    return this.incidentUpdatesService.update(+id, updateIncidentUpdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incidentUpdatesService.remove(+id);
  }
}
