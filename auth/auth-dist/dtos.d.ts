export declare class SignInDto {
    email: string;
    password: string;
}
export declare class SignUpDto extends SignInDto {
    repeat: string;
}
export declare class UserObjectDto {
    id: string;
    token: string;
}
export declare namespace ProjectDtos {
    class ProjectCreationDto {
        title: string;
        created_at: string;
        user_id: string;
    }
    class ProjectEditionDto extends ProjectCreationDto {
        id: number;
    }
}
export declare namespace ColumnDtos {
    class ColumnCreationDto {
        number: number;
        title: string;
        project_id: number;
    }
    class ColumnEditionDto extends ColumnCreationDto {
        id: number;
    }
}
export declare namespace TaskDtos {
    class TaskCreationDto {
        number: number;
        description: string;
        title: string;
        created_at: string;
        project_id: number;
        column_id: number;
    }
    class TaskEditionDto extends TaskCreationDto {
        id: number;
    }
}
