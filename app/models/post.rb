class Post < ApplicationRecord
  belongs_to :category
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many_attached :images

end
