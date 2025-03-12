import { User } from "../model/User.js";

export interface UserRepository {
    fetchUsers(): Promise<User[]>;
}