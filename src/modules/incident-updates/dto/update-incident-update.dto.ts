import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidentUpdateDto } from './create-incident-update.dto';

export class UpdateIncidentUpdateDto extends PartialType(CreateIncidentUpdateDto) {}
