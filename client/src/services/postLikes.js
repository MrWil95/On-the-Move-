import { api } from "./apiConfig"

export const getAllPostLikes = async (postId) => {
  const res = await api.get(`posts/${postId}/like`)
  return res.data
}

export const createPostLike = async (postId, postLikeData) => {
  const res = await api.post(`posts/${postId}/like`, { like: postLikeData})
  return res.data
}

export const deletePostLike = async (postId) => {
  const res = await api.delete(`posts/${postId}/like`)
  return res
}