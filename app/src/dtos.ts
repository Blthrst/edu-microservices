import { IsString, IsEmail, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}

export class SignUpDto extends SignInDto {
  @ApiProperty()
  @IsString()
  repeat: string;
}

export class UserObjectDto {
  @ApiProperty()
  id: string;
  token: string;
}

export namespace ProjectDtos {
  export class ProjectCreationDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNumber()
    created_at: string;

    @ApiProperty()
    @IsString()
    user_id: string;
  }

  export class ProjectEditionDto extends ProjectCreationDto {
    @ApiProperty()
    @IsString()
    id: number;
  }
}

export namespace ColumnDtos {
  export class ColumnCreationDto {
    @ApiProperty()
    @IsNumber()
    number: number;

    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsNumber()
    project_id: number;
  }

  export class ColumnEditionDto extends ColumnCreationDto {
    @ApiProperty()
    @IsNumber()
    id: number;
  }
}

export namespace TaskDtos {
  export class TaskCreationDto {
    @ApiProperty()
    @IsString()
    number: number;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    created_at: string;

    @ApiProperty()
    @IsString()
    project_id: number;

    @ApiProperty()
    @IsString()
    column_id: number;
  }

  export class TaskEditionDto extends TaskCreationDto {
    @ApiProperty()
    @IsNumber()
    id: number
  }
}
