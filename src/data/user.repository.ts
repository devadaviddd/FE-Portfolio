import { userAPI } from "./../di/init-API";
import { AxiosInstance } from "axios";
import {
  CreateUserDto,
  IUserRepository,
  SignInDto,
  UpdateUserDto,
} from "../domains";
import {
  SignInResponse,
  GetUserByEmailResponse,
  CreateUserResponse,
  UpdateUserResponse,
  DeleteUserResponse,
} from "./response";

export class UserRepository implements IUserRepository {
  private api: AxiosInstance;
  constructor(api: AxiosInstance) {
    this.api = api;
  }
  signin(dto: SignInDto): Promise<SignInResponse> {
    return this.api.post(userAPI.Signin, dto);
  }
  findByEmail(email: string): Promise<GetUserByEmailResponse> {
    return this.api.get(userAPI.GetUserByEmail + `?
      email=${email}`);
  }
  createUser(dto: CreateUserDto): Promise<CreateUserResponse> {
    return this.api.post(userAPI.CreateUser, dto);
  }
  update(id: string, dto: UpdateUserDto): Promise<UpdateUserResponse> {
    return this.api.patch(userAPI.UpdateUser + `/${id}`, dto)
  }
  delete(id: string): Promise<DeleteUserResponse> {
    return this.api.delete(userAPI.UpdateUser + `/${id}`);
  }
}
