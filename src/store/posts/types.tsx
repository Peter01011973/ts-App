import {PostI} from '../../interfaces';

export const ADD_POSTS = 'ADD_POSTS'
export const FETCH_POST = 'FETCH_POST';
export const ERROR_POST = 'ERROR_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

export const ADD_POSTS_SAGA = 'ADD_POSTS_SAGA';
export const ADD_POST_SAGA = 'ADD_POST_SAGA';
export const DELETE_POST_SAGA = 'DELETE_POST_SAGA';
export const EDIT_POST_SAGA = 'EDIT_POST_SAGA';

interface addPostsAction {
  type: typeof ADD_POSTS
  payload: any
}

interface addPostsSagaAction {
    type: typeof ADD_POSTS_SAGA
    payload: {currentPage: number, pageSize: number}
}

interface fetchPostAction {
    type: typeof FETCH_POST
    payload: null
}

interface errorPostAction {
    type: typeof ERROR_POST
    payload: string
}

export type PostActionTypes = addPostsAction | addPostsSagaAction | fetchPostAction | errorPostAction