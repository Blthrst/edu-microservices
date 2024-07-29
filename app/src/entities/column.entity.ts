import { randomInt } from 'crypto';
import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { ProjectEntity } from './project.entity';
import { TaskEntity } from './task.entity';

@Entity({ name: 'columns' })
export class ColumnEntity {
  @PrimaryColumn()
  id: number = randomInt(999999);

  @Column()
  number: number;

  @Column()
  title: string;

  @Column({ name: 'project_id' })
  project_id: number;

  @ManyToOne(() => ProjectEntity, project => project.id)
  @JoinColumn({ name: "project_id" })
  project: ProjectEntity

  @OneToMany(() => TaskEntity, task => task.column, {onDelete: "CASCADE"})
  tasks: TaskEntity[]
}
