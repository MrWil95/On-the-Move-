import { api } from './apiConfig'

export const createComment = async (postId, commentData) => {
  const res = await api.post(`/posts/${postId}/comments`, { comment: commentData })
  return res.data
}

export const editComment = async (postId, id, commentData) => {
  const res = await api.put(`posts/${postId}/comments/${id}`, { comment: commentData })
  return res.data
}

export const deleteComment = async (id) => {
  const res = await api.delete(`posts/${id}`)
  return res
}