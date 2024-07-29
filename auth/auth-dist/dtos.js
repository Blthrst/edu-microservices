"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskDtos = exports.ColumnDtos = exports.ProjectDtos = exports.UserObjectDto = exports.SignUpDto = exports.SignInDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SignInDto {
}
exports.SignInDto = SignInDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignInDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignInDto.prototype, "password", void 0);
class SignUpDto extends SignInDto {
}
exports.SignUpDto = SignUpDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SignUpDto.prototype, "repeat", void 0);
class UserObjectDto {
}
exports.UserObjectDto = UserObjectDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UserObjectDto.prototype, "id", void 0);
var ProjectDtos;
(function (ProjectDtos) {
    class ProjectCreationDto {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProjectCreationDto.prototype, "title", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", String)
    ], ProjectCreationDto.prototype, "created_at", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProjectCreationDto.prototype, "user_id", void 0);
    ProjectDtos.ProjectCreationDto = ProjectCreationDto;
    class ProjectEditionDto extends ProjectCreationDto {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Number)
    ], ProjectEditionDto.prototype, "id", void 0);
    ProjectDtos.ProjectEditionDto = ProjectEditionDto;
})(ProjectDtos || (exports.ProjectDtos = ProjectDtos = {}));
var ColumnDtos;
(function (ColumnDtos) {
    class ColumnCreationDto {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], ColumnCreationDto.prototype, "number", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ColumnCreationDto.prototype, "title", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], ColumnCreationDto.prototype, "project_id", void 0);
    ColumnDtos.ColumnCreationDto = ColumnCreationDto;
    class ColumnEditionDto extends ColumnCreationDto {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], ColumnEditionDto.prototype, "id", void 0);
    ColumnDtos.ColumnEditionDto = ColumnEditionDto;
})(ColumnDtos || (exports.ColumnDtos = ColumnDtos = {}));
var TaskDtos;
(function (TaskDtos) {
    class TaskCreationDto {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Number)
    ], TaskCreationDto.prototype, "number", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], TaskCreationDto.prototype, "description", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], TaskCreationDto.prototype, "title", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], TaskCreationDto.prototype, "created_at", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Number)
    ], TaskCreationDto.prototype, "project_id", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Number)
    ], TaskCreationDto.prototype, "column_id", void 0);
    TaskDtos.TaskCreationDto = TaskCreationDto;
    class TaskEditionDto extends TaskCreationDto {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], TaskEditionDto.prototype, "id", void 0);
    TaskDtos.TaskEditionDto = TaskEditionDto;
})(TaskDtos || (exports.TaskDtos = TaskDtos = {}));
//# sourceMappingURL=dtos.js.map