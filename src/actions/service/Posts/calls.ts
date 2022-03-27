import { api } from '../api';
import { PostI, PatchI } from './types';

const get = () => api.get(`careers/`);
const getById = (id?: number) => api.get(`careers/${id}/`);
const post = (payload: PostI) => api.post('careers/', payload);
const put = (id: number, payload: PatchI) => api.patch(`careers/${id}/`, payload);
const remove = (id: number) => api.delete(`careers/${id}/`);

export const posts = { get, getById, post, put, remove };
