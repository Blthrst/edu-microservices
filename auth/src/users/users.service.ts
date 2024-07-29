import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from '../entities/user.entity';
import { SignInDto, SignUpDto } from 'src/dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  public async findByEmail(email:string): Promise<UserEntity | never> {
    const user = await this.usersRepository.findOneBy({email})

    if (!user) throw new HttpException("User not found", HttpStatus.NOT_FOUND)

    return user
  }

  public async create(body: SignInDto): Promise<{email: string, id: string}> {
    const user = this.usersRepository.create(body)

    const result = await this.usersRepository
    .createQueryBuilder()
    .insert()
    .into(UserEntity)
    .values(user)
    .execute()


    if (!result) throw new HttpException("Failed to create user", HttpStatus.INTERNAL_SERVER_ERROR)

    return {
      email: user.email,
      id: user.id
    }
  }
}
