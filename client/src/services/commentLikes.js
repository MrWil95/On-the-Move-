import { api } from "./apiConfig"

export const getAllCommentLikes = async (postId, commentId) => {
  const res = await api.get(`posts/${postId}/comments/${commentId}/like`)
  return res.data
}

export const createCommentLike = async (postId, commentId, postLikeData) => {
  const res = await api.post(`posts/${postId}/comments/${commentId}/like`, { like: postLikeData})
  return res.data
}

export const deleteCommentLike = async (postId, commentId) => {
  const res = await api.delete(`posts/${postId}/comments/${commentId}/like`)
  return res
}