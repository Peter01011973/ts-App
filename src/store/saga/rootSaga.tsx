import {put, takeLatest, call} from 'redux-saga/effects';
import { getAllPostsAPI, addPostAPI, deletePostAPI, editPostAPI } from '../../Services/PostsService';
import {addPosts, fetchPost, errorPost, updatePost, deletePost, addPost} from '../posts/actions';
import { ADD_POSTS_SAGA, EDIT_POST_SAGA, DELETE_POST_SAGA, ADD_POST_SAGA, } from '../posts/types';
import {PostActionTypes} from '../posts/types';

export function* fetchPostAsync(action: any, methodAPI: Function) {
    const {type, payload} = action;
    yield put(fetchPost())
    const result = yield call(methodAPI.bind(null,payload));    
    const { response, success, message } = result;
    if (success) {
        switch (type) {
            case EDIT_POST_SAGA: yield put(updatePost(response.data)); break;
            case DELETE_POST_SAGA: yield put(deletePost(payload)); break;
            case ADD_POST_SAGA: yield put(addPost(response.data)); break;
            case ADD_POSTS_SAGA: yield put(addPosts(response.data)); break;            
            default: break;
        }
        console.log(response);  
    }
    else { yield put(errorPost(message)) }
}

export default function* rootSaga() {
    yield takeLatest(ADD_POSTS_SAGA, (action: any) => fetchPostAsync(action, getAllPostsAPI));
    yield takeLatest(ADD_POST_SAGA, (action: any) => fetchPostAsync(action, addPostAPI));
    yield takeLatest(DELETE_POST_SAGA, (action: any) => fetchPostAsync(action, deletePostAPI));
    yield takeLatest(EDIT_POST_SAGA, (action: any) => fetchPostAsync(action, editPostAPI));
  }
