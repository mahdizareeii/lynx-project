import type { PostDto } from "../dto/PostDto.js";

export class PostApi {

  async fetchPosts(): Promise<PostDto[]> {
    try {
      const json = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      ).then((res) => res.json());

      //const response = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json);
      return json
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }

}