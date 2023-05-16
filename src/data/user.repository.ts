import { CreateUserDto, IUserRepository, SignInDto, UpdateUserDto } from "../domains";
import { SignInResponse, GetUserByEmailResponse, CreateUserResponse, UpdateUserResponse, DeleteUserResponse } from "./response";

export class UserRepository implements IUserRepository {
  signin(dto: SignInDto): Promise<SignInResponse> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<GetUserByEmailResponse> {
    throw new Error("Method not implemented.");
  }
  createUser(dto: CreateUserDto): Promise<CreateUserResponse> {
    throw new Error("Method not implemented.");
  }
  update(id: string, dto: UpdateUserDto): Promise<UpdateUserResponse> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<DeleteUserResponse> {
    throw new Error("Method not implemented.");
  }

}