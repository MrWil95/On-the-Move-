class Like < ApplicationRecord
  belongs_to :comment, optional: true
  belongs_to :post, optional: true
  belongs_to :user
  validates :user_id, uniqueness: {scope: :post_id}
  validates :user_id, uniqueness: {scope: :comment_id}
end
