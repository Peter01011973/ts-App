import {put, call, takeEvery} from 'redux-saga/effects';
import { getAllPostsAPI, addPostAPI, deletePostAPI, editPostAPI } from '../../Services/PostsService';
import {addPosts, fetchPost, errorPost, updatePost, deletePost, addPost, changePostListTotalSize} from '../posts/actions';
import { ADD_POSTS_SAGA, EDIT_POST_SAGA, DELETE_POST_SAGA, ADD_POST_SAGA, } from '../posts/types';
import {ActionI} from '../posts/types';

export function* fetchPostAsync(action: ActionI, methodAPI: Function) {
    const {type, payload} = action;
    yield put(fetchPost())
    const result = yield call(methodAPI.bind(null,payload));    
    const { response, success, message } = result;
    if (success) {
        switch (type) {
            case EDIT_POST_SAGA: yield put(updatePost(response.data)); break;
            case DELETE_POST_SAGA: yield put(deletePost(payload)); break;
            case ADD_POST_SAGA: yield put(addPost(response.data)); break;
            case ADD_POSTS_SAGA: yield put(addPosts(response.data)); 
                yield put(changePostListTotalSize(+response.headers['x-total-count']));
            break;            
            default: break;
        } 
    }
    else { yield put(errorPost(message)) }
}

export default function* rootSaga() {
    yield takeEvery(ADD_POSTS_SAGA, (action: ActionI) => fetchPostAsync(action, getAllPostsAPI));
    yield takeEvery(ADD_POST_SAGA, (action: ActionI) => fetchPostAsync(action, addPostAPI));
    yield takeEvery(DELETE_POST_SAGA, (action: ActionI) => fetchPostAsync(action, deletePostAPI));
    yield takeEvery(EDIT_POST_SAGA, (action: ActionI) => fetchPostAsync(action, editPostAPI));
  }
