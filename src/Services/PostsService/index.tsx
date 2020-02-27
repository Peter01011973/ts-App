import axiosAPI from '../axiosAPI';
import {PostI} from '../../interfaces';

const baseAPI = 'http://localhost:3000/post';

export const getAllPostsAPI = (data: {currentPage: number, pageSize: number}) => axiosAPI(`${baseAPI}`, { method: 'GET', params: {_page: data.currentPage, _limit: data.pageSize}})

export const deletePostAPI = (id: number) => axiosAPI(`${baseAPI}/${id}`, { method: 'DELETE' })
export const editPostAPI = (data: PostI) => axiosAPI(`${baseAPI}/${data.id}`, { method: 'PATCH', data })

export const addPostAPI = (data: PostI) => axiosAPI(`${baseAPI}`, { method: 'POST', data })