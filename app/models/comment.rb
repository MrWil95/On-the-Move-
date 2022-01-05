class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :liking_users, :through => :likes, :source => :user
  has_many_attached :images

  def liked?(user)
    !!self.likes.find{|like| like.user_id == user.id}
  end
end
