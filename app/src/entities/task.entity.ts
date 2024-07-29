import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { randomInt } from 'crypto';

import { ColumnEntity } from './column.entity';

@Entity({ name: 'tasks' })
export class TaskEntity {
  @PrimaryColumn()
  id: number = randomInt(999999);

  @Column()
  number: number;

  @Column()
  description: string;

  @Column()
  title: string

  @Column({name: "created_at"})
  created_at: string

  @Column({name: "project_id"})
  project_id: number

  @Column({name: "column_id"})
  column_id: number

  @ManyToOne(() => ColumnEntity, column => column.id)
  @JoinColumn({ name: "column_id" })
  column: ColumnEntity
}
