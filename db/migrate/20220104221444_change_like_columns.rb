class ChangeLikeColumns < ActiveRecord::Migration[6.1]
  def change
    change_column :posts, :likes, :string
    change_column :comments, :likes, :string
  end
end
