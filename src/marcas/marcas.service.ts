import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';

const db = [
  {
    id: 1,
    name: 'kalua',
  },
  {
    id: 2,
    name: 'tommy',
  },
  {
    id: 2,
    name: 'levis',
  }, {
    id: 2,
    name: 'guess',
  }
];
@Injectable()
export class MarcasService {
  create(createMarcaDto: CreateMarcaDto) {
    return 'This action adds a new marca';
  }

  findAll() {
    return db;
  }

  findOne(id: number) {
    return `This action returns a #${id} marca`;
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return `This action updates a #${id} marca`;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }
}
