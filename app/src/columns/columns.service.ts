import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

import { ColumnDtos } from 'src/dtos';
import { ColumnEntity } from 'src/entities/column.entity';

@Injectable()
export class ColumnsService {
  constructor(
    @InjectRepository(ColumnEntity)
    private columnsRepository: Repository<ColumnEntity>,
  ) {}

  public async create(
    body: ColumnDtos.ColumnCreationDto,
  ): Promise<ColumnEntity> {
    const column = this.columnsRepository.create(body);

    await this.columnsRepository
      .createQueryBuilder()
      .insert()
      .into(ColumnEntity)
      .values(column)
      .execute();

    return column;
  }

  public async findAll(project_id: number): Promise<ColumnEntity[]> {
    const columns = await this.columnsRepository.findBy({ project_id });

    return columns;
  }

  public async update(
    body: ColumnDtos.ColumnEditionDto,
  ): Promise<ColumnEntity> {
    await this.columnsRepository
      .createQueryBuilder()
      .update()
      .set(body)
      .where({ id: body.id})
      .execute();

    const column = await this.columnsRepository.findOneBy({ id: body.id });

    return column;
  }

  public async delete(id: number): Promise<DeleteResult> {
    const result = await this.columnsRepository.delete(id)

    return result
  }
}
