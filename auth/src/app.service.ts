import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';

import { SignInDto, SignUpDto } from 'src/dtos';
import { UsersService } from './users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  public async signIn(body: SignInDto) {
    const user = await this.usersService.findByEmail(body.email);

    if (!user) throw new HttpException('Not found', HttpStatus.NOT_FOUND);

    if (await compare(body.password, user.password)) {
      const payload = { sub: user.email, id: user.id };
      return {
        id: user.id,
        token: await this.jwtService.signAsync(payload),
      };
    } else throw new UnauthorizedException();
  }

  public async signUp(body: SignUpDto) {
    if (body.password === body.repeat) {
      const password = await hash(body.password, 5);
      const user = await this.usersService.create({
        email: body.email,
        password,
      });

      return user;
    } else
      throw new HttpException(
        'Passwords are not similar',
        HttpStatus.BAD_REQUEST,
      );
  }
}
