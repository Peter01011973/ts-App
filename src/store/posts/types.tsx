export const ADD_POSTS = 'ADD_POSTS'
export const FETCH_POST = 'FETCH_POST';
export const ERROR_POST = 'ERROR_POST';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const CHANGE_POST_LIST_TOTAL_SIZE = 'CHANGE_POST_LIST_TOTAL_SIZE';

export const ADD_POSTS_SAGA = 'ADD_POSTS_SAGA';
export const ADD_POST_SAGA = 'ADD_POST_SAGA';
export const DELETE_POST_SAGA = 'DELETE_POST_SAGA';
export const EDIT_POST_SAGA = 'EDIT_POST_SAGA';

export interface ActionI {
  type: string
  payload: any
}
