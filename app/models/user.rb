class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, allow_blank: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 8 }
  validates :password, format: { with: "^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$" }
  validates :password, confirmation: true
  validates :password_confirmation, presence: true
end
