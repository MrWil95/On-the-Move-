class AddUsernameToLikes < ActiveRecord::Migration[6.1]
  def change
    add_column :likes, :username, :string
  end
end
