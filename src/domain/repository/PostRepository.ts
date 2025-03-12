import { Post } from "../model/Post.js";

export interface PostRepository {
    fetchPosts(): Promise<Post[]>;
}