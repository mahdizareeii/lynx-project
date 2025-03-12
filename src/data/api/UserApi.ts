import type { User } from "../../domain/model/User.js";
import type { UserDto } from "../dto/UserDto.js";

export class UserApi {

    constructor(private httpClient: HttpClient) {}

    async fetchUusers(): Promise<UserDto[]> {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    }



}