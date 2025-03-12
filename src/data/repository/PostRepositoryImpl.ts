import type { PostRepository } from "../../domain/repository/PostRepository.js";
import { Post } from "../../domain/model/Post.js";
import { PostApi } from "../api/PostApi.js";
import { PostMapper } from "../../domain/mapper/UserMapper.js";

export class PostRepositoryImpl implements PostRepository {

    constructor(private api: PostApi) {}

    async fetchPosts(): Promise<Post[]> {
        const posts = await this.api.fetchPosts();
        return PostMapper.toDomainList(posts)
    }
}