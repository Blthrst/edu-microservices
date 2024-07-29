import { Controller, Post, Body, HttpCode, Inject } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';

import { SignInDto, SignUpDto } from 'src/dtos';
import { Observable } from 'rxjs';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(@Inject("AUTH_SERVICE") private client: ClientProxy) {}

  @HttpCode(201)
  @Post('/signin')
  public signIn(
    @Body() signInDto: SignInDto,
  ): Observable<{ id: string; token: string }> {
    return this.client.send('signin', signInDto);
  }

  @HttpCode(201)
  @Post('/signup')
  public async signUp(@Body() signUpDto: SignUpDto) {
    return this.client.send('signup', signUpDto);
  }
}
