import {
  CreateUserResponse,
  DeleteUserResponse,
  GetUserByEmailResponse,
  SignInResponseSuccess,
  UpdateUserResponse,
} from "../../data/response";
import { CreateUserDto, SignInDto, UpdateUserDto } from "../dtos";

export interface IUserRepository {
  signin(dto: SignInDto): Promise<SignInResponseSuccess>;
  findByEmail(email: string): Promise<GetUserByEmailResponse>;
  createUser(dto: CreateUserDto): Promise<CreateUserResponse>;
  update(id: string, dto: UpdateUserDto): Promise<UpdateUserResponse>;
  delete(id: string): Promise<DeleteUserResponse>;
}
