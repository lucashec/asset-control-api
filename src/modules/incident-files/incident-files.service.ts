import { Injectable } from '@nestjs/common';
import { CreateIncidentFileDto } from './dto/create-incident-file.dto';
import { UpdateIncidentFileDto } from './dto/update-incident-file.dto';

@Injectable()
export class IncidentFilesService {
  create(createIncidentFileDto: CreateIncidentFileDto) {
    return 'This action adds a new incidentFile';
  }

  findAll() {
    return `This action returns all incidentFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incidentFile`;
  }

  update(id: number, updateIncidentFileDto: UpdateIncidentFileDto) {
    return `This action updates a #${id} incidentFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidentFile`;
  }
}
