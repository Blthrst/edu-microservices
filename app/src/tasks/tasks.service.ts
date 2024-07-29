import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { TaskEntity } from 'src/entities/task.entity';
import { TaskDtos } from 'src/dtos';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  public async findAll(project_id: number): Promise<TaskEntity[]> {
    const tasks = await this.taskRepository.findBy({project_id})

    return tasks
  }

  public async findById(project_id: number, id: number): Promise<TaskEntity> {
    const task = await this.taskRepository.findOneBy({id, project_id})

    return task
  }

  public async create(body: TaskDtos.TaskCreationDto): Promise<TaskEntity> {
    const task = this.taskRepository.create(body)

    await this.taskRepository
    .createQueryBuilder()
    .insert()
    .into(TaskEntity)
    .values(task)
    .execute()

    return task
  }

  public async update(body: TaskDtos.TaskEditionDto): Promise<TaskEntity> {

    await this.taskRepository
    .createQueryBuilder()
    .update()
    .set(body)
    .where({id: body.id, project_id: body.project_id})
    .execute()

    const task = await this.findById(body.project_id, body.id)

    return task
  }

  public async delete(id: number): Promise<DeleteResult> {
    const result = await this.taskRepository.delete(id)

    return result
  }
}
