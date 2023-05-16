import { UserProps } from "../../domains";

export type GetUserByEmailResponse = {
  message: string;
  user: UserProps
}