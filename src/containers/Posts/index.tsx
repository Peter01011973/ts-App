import React, { useEffect, useState } from 'react';
import './posts.css';
import { useDispatch, connect} from 'react-redux';
import {RootState} from '../../store/storeConfig';
import { addPostsSAGA, addPostSAGA, editPostSAGA, deletePostSAGA } from '../../store/posts/actions';
import { PostI } from '../../interfaces';
import PostsRender from '../../components/PostsRender';

interface Props {
    posts: PostI[],
    isLoading: boolean,
    error: boolean,
}

const Post: React.FC<Props> = ({ posts, isLoading, error }) => {
    const dispatch = useDispatch();
    const [addOREditData, setAddOREditData] = useState(null);
    const [addToggle, setAddToggle] = useState(false);
    const [editToggle, setEditToggle] = useState(false);

    useEffect( () => {
        dispatch(addPostsSAGA());
    }
    , [dispatch]);

    const deletePostHandler = (event: Event, postData: PostI) => {
        event.stopPropagation();
        dispatch(deletePostSAGA(postData.id));       
    }

    const selectPostHandler = (postData: PostI) => {console.log('select', postData)}

    const editPostHandler = (event: Event, postData: PostI) => {
        event.stopPropagation();
        setAddOREditData(postData);
        setEditToggle(true);
    }

    const addPostHandler = () => {
        setAddOREditData(null);
        setAddToggle(true);
    }

    const addOrEditPostHandler = (postData: PostI) => {
        if (addToggle) {
            dispatch(addPostSAGA(postData))
            setAddToggle(false);
        } else {
            dispatch(editPostSAGA(postData))
            setEditToggle(false);
        }
    }
    
    return (
        <PostsRender
            error={error}
            isLoading={isLoading}
            data={posts}
            deletePostHandler = {deletePostHandler}
            selectPostHandler = {selectPostHandler}
            editPostHandler = {editPostHandler}
            addToggle = {addToggle}
            editToggle = {editToggle}
            addOREditData={addOREditData}
            addPostHandler={addPostHandler}
            addOrEditPostHandler={addOrEditPostHandler}
        />
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        posts: state.post.posts,
        isLoading: state.post.isLoading,
        error: state.post.error
    }
}

export default connect(mapStateToProps)(Post)
