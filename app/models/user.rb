class User < ApplicationRecord
  has_secure_password
  has_many :comment
  has_many :post

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }
  validates :password, format: { with: /\A[a-zA-Z0-9!@#$%^&*()_]+\z/ }
  # validates :password, confirmation: true
  # validates :password_confirmation, presence: true
end
