import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { SignInDto } from 'src/dtos';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UserEntity>);
    findByEmail(email: string): Promise<UserEntity | never>;
    create(body: SignInDto): Promise<{
        email: string;
        id: string;
    }>;
}
