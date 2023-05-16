import { UserProps } from "../../domains";

export type CreateUserResponse = {
  message: string;
  user: UserProps
}