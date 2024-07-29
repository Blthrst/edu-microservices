import { AuthService } from './app.service';
import { SignInDto, SignUpDto } from 'src/dtos';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        id: string;
        token: string;
    }>;
    signUp(signUpDto: SignUpDto): Promise<{
        email: string;
        id: string;
    }>;
}
