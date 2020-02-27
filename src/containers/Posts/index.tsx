import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { RootState } from '../../store/storeConfig';
import { addPostsSAGA, addPostSAGA, editPostSAGA, deletePostSAGA } from '../../store/posts/actions';
import { PostI } from '../../interfaces';
import PostList from './PostList';
import Pagination from '../../components/UI/Pagination';
import { getPosts, getIsLoading } from '../../store/posts/selectors';
interface Props {
    posts: PostI[],
    isLoading: boolean,
    error: boolean,
    postsTotalSize: number
}

const Post: React.FC<Props> = ({ posts, isLoading, error, postsTotalSize }) => {
    const dispatch = useDispatch();
    const [addOREditData, setAddOREditData] = useState(null);
    const [addToggle, setAddToggle] = useState(false);
    const [editToggle, setEditToggle] = useState(false);

    const defaultPageSize = 5
    const [currentPage, setCurrentPage] = useState(1)
    let startIndex: number = 1;
    let endIndex: number = 1;
    const [pageSize, setPageSize] = useState(defaultPageSize)
    const totalItems = postsTotalSize;

    const getPage = (currentPage: number, totalItems: number, pageSize: number) => {
        startIndex = (currentPage - 1) * pageSize;
        endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    }

    const currentPageChangeHandler = (page: number) => {
        setCurrentPage(page);
    }
    const pageSizeChangeHandler = (rowsPerPage: number) => {
        setPageSize(rowsPerPage);
        setCurrentPage(1);
    }

    getPage(currentPage, totalItems, pageSize);

    useEffect(() => {
            dispatch(addPostsSAGA({currentPage, pageSize}));
        }
        , [dispatch, currentPage, pageSize]);

    const deletePostHandler = (event: Event, postData: PostI) => {
        event.stopPropagation();
        dispatch(deletePostSAGA(postData.id));
        dispatch(addPostsSAGA({currentPage, pageSize}));
    }

    const selectPostHandler = (postData: PostI) => { console.log('select', postData) }

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
            setCurrentPage(Math.ceil(postsTotalSize / pageSize));
            dispatch(addPostsSAGA({currentPage, pageSize}));
        } else {
            dispatch(editPostSAGA(postData))
            setEditToggle(false);
            dispatch(addPostsSAGA({currentPage, pageSize}));
        }
    }

    console.log('current Page', currentPage);
    

    return (
        <>
            <Pagination
                dataLenght={totalItems}
                currentPageChangeHandler={currentPageChangeHandler}
                currentPage={currentPage}
                pageSizeArray={[3, 5, 10]}
                pageSizeChangeHandler={pageSizeChangeHandler}
                defaultPageSize={defaultPageSize}
                pageSize={pageSize}
                startIndex={startIndex + 1}
                endIndex={endIndex + 1}
            />
            <PostList
                error={error}
                isLoading={isLoading}
                data={posts}
                deletePostHandler={deletePostHandler}
                selectPostHandler={selectPostHandler}
                editPostHandler={editPostHandler}
                addToggle={addToggle}
                editToggle={editToggle}
                addOREditData={addOREditData}
                addPostHandler={addPostHandler}
                addOrEditPostHandler={addOrEditPostHandler}
            />
        </>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        posts: getPosts(state),
        isLoading: getIsLoading(state),
        error: state.post.error,
        postsTotalSize: state.post.postListTotalSize
    }
}

export default connect(mapStateToProps)(Post)
