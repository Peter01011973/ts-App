import React, { useState, useEffect, useRef, FormEvent } from 'react';
import './addOReditPost.css';
import { PostI } from '../../interfaces';

interface Props {
    addOrEditPostHandler: Function,
    editPost: PostI
}

const AddOReditPost: React.FC<Props> = ({addOrEditPostHandler, editPost}) => {
    
    const initData = {
        title: editPost ? editPost.title : '',
        body: editPost ? editPost.body : '',
        userId: editPost ? editPost.userId : 1,
        id: editPost ? editPost.id : null
    }
    
    const [data, setData] = useState(initData);
    const inputRef: React.MutableRefObject<any> = useRef();

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addOrEditPostHandler(data);
    }

    useEffect(
        () => {inputRef.current.focus();}
    ,[])

    return (
        <form onSubmit={submitHandler}>
            <label>Title:
                <input 
                    type='text' 
                    value={data.title} 
                    onChange={event => setData({...data, title: event.target.value })} 
                    ref={inputRef}
                />
            </label>
            <label>Body:
                <input type='text' value={data.body} onChange={event => setData({...data, body: event.target.value })} />
            </label>
            <label>UserId:
                <input type='number' value={data.userId} onChange={event => setData({...data, userId: +event.target.value })} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddOReditPost