import { Post } from "../../domain/model/Post.js";
import type { PostDto } from "../dto/PostDto.js";

export class PostApi {

  async fetchPosts(): Promise<PostDto[]> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

}