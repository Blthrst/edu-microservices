import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
  HttpCode
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthGuard } from 'src/auth/auth.guard';
import { UserObject } from 'src/auth/user-info';
import { ProjectsService } from './projects.service';
import { ColumnDtos, ProjectDtos, TaskDtos, UserObjectDto } from 'src/dtos';
import { ColumnsService } from 'src/columns/columns.service';
import { TasksService } from 'src/tasks/tasks.service';

@ApiTags("Projects")
@Controller('projects')
export class ProjectsController {
  constructor(
    private projectsService: ProjectsService,
    private columnsService: ColumnsService,
    private tasksService: TasksService,
  ) {}

  @HttpCode(200)
  @UseGuards(AuthGuard)
  @Get('/all')
  public async getAll(@UserObject() user: UserObjectDto) {
    return await this.projectsService.findAll(user.id);
  }

  @HttpCode(200)
  @UseGuards(AuthGuard)
  @Get('/:id')
  public async getOne(
    @Param('id') id: number,
    @UserObject() user: UserObjectDto,
  ) {
    return await this.projectsService.getEntire(user.id, id);
  }

  @HttpCode(201)
  @UseGuards(AuthGuard)
  @Post('/new')
  public async create(@Body() body: ProjectDtos.ProjectCreationDto) {
    return await this.projectsService.create(body);
  }

  @HttpCode(204)
  @UseGuards(AuthGuard)
  @Delete('/:id')
  public async delete(
    @Param('id') id: number,
    @UserObject() user: UserObjectDto,
  ) {
    return await this.projectsService.delete(user.id, id);
  }

  @HttpCode(200)
  @UseGuards(AuthGuard)
  @Put('/update')
  public async update(@Body() body: ProjectDtos.ProjectEditionDto) {
    return await this.projectsService.update(body);
  }

  @HttpCode(200)
  @UseGuards(AuthGuard)
  @Get('/:id/columns')
  public async getColumns(@Param('id') id: number) {
    return await this.columnsService.findAll(id);
  }

  @HttpCode(201)
  @UseGuards(AuthGuard)
  @Post('/:id/columns/new')
  public async createColumn(@Body() body: ColumnDtos.ColumnCreationDto) {
    return await this.columnsService.create(body);
  }

  @HttpCode(200)
  @UseGuards(AuthGuard)
  @Put('/:id/columns/update')
  public async updateColumn(@Body() body: ColumnDtos.ColumnEditionDto) {
    return await this.columnsService.update(body);
  }

  @HttpCode(204)
  @UseGuards(AuthGuard)
  @Delete('/:id/columns/:columnId')
  public async deleteColumn(@Param('columnId') id: number) {
    return await this.columnsService.delete(id);
  }

  @HttpCode(200)
  @UseGuards(AuthGuard)
  @Get('/:id/tasks/')
  public async getTasks(@Param('id') id: number) {
    return await this.tasksService.findAll(id);
  }

  @HttpCode(200)
  @UseGuards(AuthGuard)
  @Get('/:id/tasks/:taskId')
  public async getTask(
    @Param('id') id: number,
    @Param('taskId') taskId: number,
  ) {
    return await this.tasksService.findById(id, taskId);
  }

  @HttpCode(201)
  @UseGuards(AuthGuard)
  @Post('/:id/tasks/')
  public async createTask(@Body() body: TaskDtos.TaskCreationDto) {
    return await this.tasksService.create(body);
  }

  @HttpCode(200)
  @UseGuards(AuthGuard)
  @Put('/:id/tasks/')
  public async updateTask(@Body() body: TaskDtos.TaskEditionDto) {
    return await this.tasksService.update(body);
  }

  @HttpCode(204)
  @UseGuards(AuthGuard)
  @Delete('/:id/tasks/:taskId')
  public async deleteTask(@Param('taskId') id: number) {
    return await this.tasksService.delete(id);
  }
}
