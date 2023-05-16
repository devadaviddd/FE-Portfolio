import { UserAPI, UserAPIprops } from "../data";

const userAPIprops: UserAPIprops = {
  viewUsers: '/users',
  createUser: '/users',
  updateUser: '/users',
  getUserByEmail: '/users',
  signin: '/auth/signin'
}

const userAPI = new UserAPI(userAPIprops);