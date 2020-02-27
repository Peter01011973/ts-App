import React from 'react'
import { PostI } from '../../../interfaces'
import Post from './PostItem'
import AddOReditPost from '../AddOrEditPost';
import './PostItem';
import './postList.css';

interface Props {
    data: PostI[],
    isLoading: boolean,
    error: boolean,
    addOREditData: PostI,
    addToggle: boolean,
    editToggle: boolean,
    editPostHandler: Function,
    selectPostHandler: Function,
    deletePostHandler: Function,
    addPostHandler: Function,
    addOrEditPostHandler: Function
}

const PostsRender: React.FC<Props> = ({
    data, isLoading, error, selectPostHandler, deletePostHandler, editToggle,
    editPostHandler, addPostHandler, addOrEditPostHandler, addOREditData, addToggle}) => {

    const table = !data ? null : (
        <table>
            <thead>
                <tr>
                <th >ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>UserId</th>
                        <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {data.map((post: PostI) => (
                    <Post
                        key = {post.id}
                        post = {post}
                        isLoading = {isLoading}
                        deletePostHandler = {deletePostHandler}
                        selectPostHandler = {selectPostHandler}
                        editPostHandler = {editPostHandler}
                    />
                ))}
            </tbody>
        </table>
    )

    return (
        <div className='postsList'>
            {isLoading ? <p className='loading'>Loading ...</p> : !(addToggle || editToggle) && <button className = 'postsList__addButton' disabled={isLoading} onClick={() => { addPostHandler() }}>Add new item</button> }
            {(addToggle || editToggle) && <AddOReditPost addOrEditPostHandler={addOrEditPostHandler} editPost = {addOREditData}/>}
            {table}
        </div>
    )
}

export default PostsRender
