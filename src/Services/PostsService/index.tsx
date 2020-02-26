import transport from '../transport';
import {PostI} from '../../interfaces';

const baseAPI = 'http://localhost:3000/post';

export const getAllPostsAPI = (data: {currentPage: number, pageSize: number}) => transport(`${baseAPI}`, { method: 'GET', params: {_page: data.currentPage, _limit: data.pageSize}})
export const deletePostAPI = (id: number) => transport(`${baseAPI}/${id}`, { method: 'DELETE' })
export const editPostAPI = (data: PostI) => transport(`${baseAPI}/${data.id}`, { method: 'PATCH', data })
export const addPostAPI = (data: PostI) => transport(`${baseAPI}`, { method: 'POST', data })