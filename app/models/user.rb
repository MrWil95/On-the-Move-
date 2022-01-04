class User < ApplicationRecord
  has_secure_password
  has_one :profile, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :liked_comments, :through => :likes, :source => :comment, dependent: :destroy
  has_many :liked_posts, :through => :likes, :source => :post, dependent: :destroy
  has_one_attached :avatar

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }
  validates :password, format: { with: /\A[a-zA-Z0-9!@#$%^&*()_]+\z/ }
  # validates :password, confirmation: true
  # validates :password_confirmation, presence: true
end
