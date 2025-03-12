import type { PostRepository } from "../repository/PostRepository.js";
import { Post } from "../model/Post.js";


export class GetPostsUseCase {
  constructor(private repository: PostRepository) {}

  async execute(): Promise<Post[]> {
    return await this.repository.fetchPosts();
  }
}
