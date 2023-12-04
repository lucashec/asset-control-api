import { Injectable } from '@nestjs/common';
import { CreateIncidentUpdateDto } from './dto/create-incident-update.dto';
import { UpdateIncidentUpdateDto } from './dto/update-incident-update.dto';

@Injectable()
export class IncidentUpdatesService {
  create(createIncidentUpdateDto: CreateIncidentUpdateDto) {
    return 'This action adds a new incidentUpdate';
  }

  findAll() {
    return `This action returns all incidentUpdates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incidentUpdate`;
  }

  update(id: number, updateIncidentUpdateDto: UpdateIncidentUpdateDto) {
    return `This action updates a #${id} incidentUpdate`;
  }

  remove(id: number) {
    return `This action removes a #${id} incidentUpdate`;
  }
}
