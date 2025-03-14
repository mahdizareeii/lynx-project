// presentation/views/PostView.ts
import { useCallback, useEffect, useState } from '@lynx-js/react'
import { root } from "@lynx-js/react";
import { PostApi } from "../../data/api/PostApi.js";
import { Post } from '../../domain/model/Post.js';
import { PostRepositoryImpl } from "../../data/repository/PostRepositoryImpl.js";
import { GetPostsUseCase } from "../../domain/usecase/GetPostUseCase.js";
import { PostsViewModel } from "../viewmodel/PostsViewModel.js";
import type { UiState } from "../UiState.js";

const createPostViewModel = (): PostsViewModel => {
  const postApi = new PostApi();
  const postRepository = new PostRepositoryImpl(postApi);
  const getPostsUseCase = new GetPostsUseCase(postRepository);
  return new PostsViewModel(getPostsUseCase);
};

const PostsScreen = () => {
   // Local state for UI using our UiState type
   const [state, setState] = useState<UiState<Post[]>>({ state: "initial" });
   const viewModel = createPostViewModel();
 
   useEffect(() => {
     // Subscribe to state changes from the ViewModel
     viewModel.subscribe((newState) => setState(newState));
     // Trigger fetching posts on component mount
     viewModel.fetchPosts();
   }, []);
   return (
    <scroll-view scroll-y className="scroll-view">
      {state.state === "loading" && (
        <text className="scroll-view__loading">Loading...</text>
      )}
      {state.state === "error" && (
        <text className="scroll-view__error">Error: {state.message}</text>
      )}
      {state.state === "success" &&
        state.data?.map((post) => (
          <view key={post.title} className="scroll-view__post">
            <text>{`${post.id}: ${post.title}`}</text>
          </view>
        ))}
    </scroll-view>
  );
};

export default PostsScreen;



