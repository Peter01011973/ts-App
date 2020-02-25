import { ADD_POSTS, ADD_POST, DELETE_POST, FETCH_POST, UPDATE_POST, ERROR_POST, PostActionTypes, ADD_POSTS_SAGA, ADD_POST_SAGA, DELETE_POST_SAGA, EDIT_POST_SAGA} from './types';
import {PostI} from '../../interfaces';

export function addPosts(posts: PostI[]): PostActionTypes {
  return {
    type: ADD_POSTS,
    payload: posts
  }
}

export const fetchPost = () => ({type: FETCH_POST})
export const errorPost = (message: string) => ({type: ERROR_POST, payload: message});
export const addPost = (post: PostI) => ({type: ADD_POST, payload: post});
export const deletePost = (id: number) => ({type: DELETE_POST, payload: id});
export const updatePost = (post: PostI) => ({type: UPDATE_POST, payload: post});

// for SAGA
export const addPostsSAGA = () => ({type: ADD_POSTS_SAGA});
export const addPostSAGA = (data: PostI) => ({type: ADD_POST_SAGA, payload: data})
export const deletePostSAGA = (id: number) => ({type: DELETE_POST_SAGA, payload: id});
export const editPostSAGA = (post: PostI) => ({type: EDIT_POST_SAGA, payload: post});
