import { PartialType } from '@nestjs/mapped-types';
import { CreateIncidentFileDto } from './create-incident-file.dto';

export class UpdateIncidentFileDto extends PartialType(CreateIncidentFileDto) {}
