import { JwtService } from '@nestjs/jwt';
import { SignInDto, SignUpDto } from 'src/dtos';
import { UsersService } from './users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(body: SignInDto): Promise<{
        id: string;
        token: string;
    }>;
    signUp(body: SignUpDto): Promise<{
        email: string;
        id: string;
    }>;
}
