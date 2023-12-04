import { Injectable } from '@nestjs/common';
import { CreateBillFileDto } from './dto/create-bill-file.dto';
import { UpdateBillFileDto } from './dto/update-bill-file.dto';

@Injectable()
export class BillFilesService {
  create(createBillFileDto: CreateBillFileDto) {
    return 'This action adds a new billFile';
  }

  findAll() {
    return `This action returns all billFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billFile`;
  }

  update(id: number, updateBillFileDto: UpdateBillFileDto) {
    return `This action updates a #${id} billFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} billFile`;
  }
}
