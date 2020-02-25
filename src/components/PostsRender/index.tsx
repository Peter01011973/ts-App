import React from 'react'
import { PostI } from '../../interfaces'
import PostRender from './PostRender'
import AddOReditPost from '../AddOrEditPost'

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
                    <PostRender 
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
        <div>
            {isLoading ? <p>Loading ...</p> : !(addToggle || editToggle) && <button disabled={isLoading} onClick={() => { addPostHandler() }}>Add new item</button> }
            {(addToggle || editToggle) && <AddOReditPost addOrEditPostHandler={addOrEditPostHandler} editPost = {addOREditData}/>}
            {table}
        </div>
    )
}

export default PostsRender
