class Profile < ApplicationRecord
  belongs_to :user
  has_many :user_posts, :through => :user, :source => :post
  has_one_attached :avatar
end
