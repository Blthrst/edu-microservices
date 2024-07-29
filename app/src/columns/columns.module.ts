import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ColumnEntity } from 'src/entities/column.entity';
import { ColumnsService } from './columns.service';

@Module({
    imports: [TypeOrmModule.forFeature([ColumnEntity])],
    providers: [ColumnsService],
    exports: [ColumnsService],
})
export class ColumnsModule {}
