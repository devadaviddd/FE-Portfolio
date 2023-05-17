import { APIService } from "../axios/client";
import { UserRepository } from "../data";

export const userRepository = new UserRepository(APIService);