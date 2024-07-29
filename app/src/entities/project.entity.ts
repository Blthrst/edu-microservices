import { randomInt } from 'crypto';
import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

import { UserEntity } from './user.entity';
import { ColumnEntity } from './column.entity';

@Entity({ name: 'projects' })
export class ProjectEntity {
  @PrimaryColumn()
  id: number = randomInt(9999999);

  @Column()
  title: string;

  @Column({name: "created_at"})
  created_at: string;

  @Column({name: "user_id"})
  user_id: string

  @ManyToOne(() => UserEntity, user => user.id)
  @JoinColumn({ name: "user_id" })
  user: UserEntity

  @OneToMany(() => ColumnEntity, column => column.project, {onDelete: "CASCADE"})
  columns: ColumnEntity[]

}
