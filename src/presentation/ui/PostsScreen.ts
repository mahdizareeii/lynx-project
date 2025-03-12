// presentation/views/PostView.ts
import { useCallback, useEffect, useState } from '@lynx-js/react'
import { root } from "@lynx-js/react";
import { PostApi } from "../../data/api/PostApi.js";
import { PostRepositoryImpl } from "../../data/repository/PostRepositoryImpl.js";
import { GetPostsUseCase } from "../../domain/usecase/GetPostUseCase.js";
import { PostsViewModel } from "../viewmodel/PostsViewModel.js";
import type { UiState } from "../UiState.js";
import "./App.css"

// Dependency Injection Setup
const postApi = new PostApi();
const postRepository = new PostRepositoryImpl(postApi);
const getPostsUseCase = new GetPostsUseCase(postRepository);

const PostView = () => {
  const state = new PostsViewModel(getPostsUseCase);

  return (
    <scroll-view scroll-y className="scroll-view">
      {state.state === "loading" ? (
        <text className="scroll-view__loading">Loading...</text>
      ) : state.state === "error" ? (
        <text className="scroll-view__error">{state.message}</text>
      ) : (
        state.data.map((post) => (
          <view key={post.id} className="scroll-view__post">
            <text>{`${post.id} : ${post.title}`}</text>
          </view>
        ))
      )}
    </scroll-view>
  );
};

export default PostView;


