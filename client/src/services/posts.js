import {api} from './apiConfig'

export const getAllPosts = async () => {
  const res = await api.get('/posts')
  return res.data
}

export const getCategory = async (category_id) => {
  const res = await api.get(`/categories/${category_id}`)
  return res.data
}

export const getOnePost = async (id) => {
  const res = await api.get(`/posts/${id}`)
  return res.data
}

export const createPost = async (postData) => {
  const res = await api.post('/posts', { post: postData })
  return res.data
}

export const editPost = async (id, postData) => {
  const res = await api.put(`/posts/${id}`, { post: postData })
  return res.data
}

export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`)
  return res
}

// export const addCommentToPost = async (commentData, id) => {
//   const res = await api.post(``)
// }