import { CHANGE_POST_LIST_TOTAL_SIZE, ADD_POSTS, ADD_POST, DELETE_POST, FETCH_POST, UPDATE_POST, ERROR_POST, ADD_POSTS_SAGA, ADD_POST_SAGA, DELETE_POST_SAGA, EDIT_POST_SAGA} from './types';
import {PostI} from '../../interfaces';

export const addPosts = (posts: PostI[]) => ({ type: ADD_POSTS, payload: posts })
export const fetchPost = () => ({type: FETCH_POST})
export const errorPost = (message: string) => ({type: ERROR_POST, payload: message});
export const addPost = (post: PostI) => ({type: ADD_POST, payload: post});
export const deletePost = (id: number) => ({type: DELETE_POST, payload: id});
export const updatePost = (post: PostI) => ({type: UPDATE_POST, payload: post});
export const changePostListTotalSize = (totalSize: number) => ({type: CHANGE_POST_LIST_TOTAL_SIZE, payload: totalSize});

// for SAGA
export const addPostsSAGA = (data: {currentPage: number, pageSize: number}) => ({type: ADD_POSTS_SAGA, payload: data});
export const addPostSAGA = (data: PostI) => ({type: ADD_POST_SAGA, payload: data})
export const deletePostSAGA = (id: number) => ({type: DELETE_POST_SAGA, payload: id});
export const editPostSAGA = (post: PostI) => ({type: EDIT_POST_SAGA, payload: post});
