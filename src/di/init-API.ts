import { UserAPI, UserAPIprops } from "../data";
import { User } from "../domains";

const userAPIprops: UserAPIprops = {
  viewUsers: '/users',
  createUser: '/users',
  updateUser: '/users',
  getUserByEmail: '/users',
  signin: '/auth/signin'
}

export const userAPI = new UserAPI(userAPIprops);
