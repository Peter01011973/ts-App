import React from 'react'
import { PostI } from '../../../../interfaces';
import './postItem.css';

interface Props {
    post: PostI,
    isLoading: boolean,
    editPostHandler: Function,
    selectPostHandler: Function,
    deletePostHandler: Function
}

const PostRender: React.FC<Props> = ({post, isLoading, selectPostHandler, deletePostHandler, editPostHandler}) => {
    const {id, title, body, userId} = post;
    return (
        <tr key={id} onClick={() => selectPostHandler(post)} className='table-row'>
            <td>{id}</td>
            <td>{title}</td>
            <td>{body}</td>
            <td>{userId}</td>
            <td>
                <button className='buttonInTable' type="button" disabled={isLoading} onClick={(event) => deletePostHandler(event, post)}>Delete</button>
                <button className='buttonInTable' type="button" disabled={isLoading} onClick={(event) => editPostHandler(event, post)}>Edit</button>
            </td>
        </tr>
    )
}

export default PostRender
