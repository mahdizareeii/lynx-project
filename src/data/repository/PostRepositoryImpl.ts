import type { PostRepository } from "../../domain/repository/PostRepository.js";
import { Post } from "../../domain/model/Post.js";
import { PostApi } from "../api/PostApi.jsx";
import { PostMapper } from "../../domain/mapper/UserMapper.js";

export class PostRepositoryImpl implements PostRepository {

    constructor(private api: PostApi) {}

    async fetchPosts(): Promise<Post[]> {
        const posts = await this.api.fetchPosts();
        console.log("post fetched in repository" + posts)
        return PostMapper.toDomainList(posts)
    }
}