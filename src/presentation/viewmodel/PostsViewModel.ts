// presentation/viewmodel/PostViewModel.ts
import { GetPostsUseCase } from "../../domain/usecase/GetPostUseCase.js";
import { Post } from "../../domain/model/Post.js";
import type { UiState } from "../UiState.js";

export class PostsViewModel {
  private getPostsUseCase: GetPostsUseCase;
  private state: UiState<Post[]> = { state: "initial" };
  private observers: ((state: UiState<Post[]>) => void)[] = [];

  constructor(getPostsUseCase: GetPostsUseCase) {
    this.getPostsUseCase = getPostsUseCase;
  }

  async fetchPosts() {
    this.updateState({ state: "loading" });

    try {
      const posts = await this.getPostsUseCase.execute();
      this.updateState({ state: "success", data: posts });
    } catch (error) {
      this.updateState({ state: "error", message: "Failed to load posts" });
    }
  }

  private updateState(newState: UiState<Post[]>) {
    this.state = newState;
    this.notifyObservers();
  }

  private notifyObservers() {
    this.observers.forEach((observer) => observer(this.state));
  }

  subscribe(observer: (state: UiState<Post[]>) => void) {
    this.observers.push(observer);
    observer(this.state);
  }
}
