import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { randomUUID } from 'crypto';

import { ProjectEntity } from './project.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn('varchar')
  id: string = randomUUID();

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ProjectEntity, (project) => project.user, {
    onDelete: 'CASCADE',
  })
  columns: ProjectEntity[];
}
