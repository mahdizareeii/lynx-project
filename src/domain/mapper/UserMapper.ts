import type { PostDto } from "../../data/dto/PostDto.js";
import { Post } from "../model/Post.js";

export class PostMapper {
    static toDomain(dto: PostDto): Post {
        return new Post(
            dto.userId ?? 0,
            dto.id ?? 0,
            dto.title ?? "",
            dto.body ?? ""
        )
    }

    static toDomainList(dtos: PostDto[]): Post[] {
        return dtos.map(PostMapper.toDomain);
    }
}