import { UserDto } from "../../data/dto/UserDto.js";
import { User } from "../model/User.js";

export class UserMapper {
    static toDomain(dto: UserDto): User {
        return new User(dto.id ?? 0, dto.userName ?? "Unknown User", dto.email ?? "UnknownEmail@unknown.com")
    }

    static toDomainList(dtos: UserDto[]): User[] {
        return dtos.map(UserMapper.toDomain);
    }
}