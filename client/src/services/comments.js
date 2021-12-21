import { api } from './apiConfig'

export const createComment = async (postId, commentData) => {
  const res = await api.post(`/posts/${postId}/comments`, { comment: commentData })
  return res.data
}

export const editComment = async (id, commentData) => {
  const res = await api.put(`/comments/${id}`, { comment: commentData })
  return res.data
}

export const deleteComment = async (id) => {
  const res = await api.delete(`/comments/${id}`)
  return res
}