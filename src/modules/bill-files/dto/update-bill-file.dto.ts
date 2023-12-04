import { PartialType } from '@nestjs/mapped-types';
import { CreateBillFileDto } from './create-bill-file.dto';

export class UpdateBillFileDto extends PartialType(CreateBillFileDto) {}
