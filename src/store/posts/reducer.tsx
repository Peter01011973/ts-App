import { ADD_POSTS, ADD_POST, FETCH_POST, DELETE_POST, ERROR_POST, UPDATE_POST, CHANGE_POST_LIST_TOTAL_SIZE, ActionI } from './types';
import { PostsStateI} from '../../interfaces';
import produce from 'immer';

const initialState: PostsStateI = {
    posts: [],
    isLoading: false,
    error: false,
    postListTotalSize: 0
}

const postReducer = produce((draft: PostsStateI = initialState, action: ActionI) => {
    const {type, payload} = action; 
    switch (type) {
        case FETCH_POST: return {...draft, isLoading: true};
        case ADD_POSTS: return {...draft, posts: [...payload], isLoading: false};
        case ADD_POST: return {...draft, posts: [...draft.posts, payload], isLoading: false};
        case DELETE_POST: return {...draft, posts: draft.posts.filter(post =>(post.id !== payload)), isLoading: false};
        case UPDATE_POST: return {...draft, posts: draft.posts.map(post =>(post.id === payload.id ? payload : post)), isLoading: false};
        case ERROR_POST: return {...draft, error: payload};
        case CHANGE_POST_LIST_TOTAL_SIZE: return {...draft, postListTotalSize: payload};
        default: return draft;
    }
})

export default postReducer;
