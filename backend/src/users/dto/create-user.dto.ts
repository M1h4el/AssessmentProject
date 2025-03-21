export class CreateUserDto {
    readonly userName: string;
    readonly email: string;
    readonly password: string;
    readonly notifications?: number = 0;
  }