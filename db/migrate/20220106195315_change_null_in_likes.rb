class ChangeNullInLikes < ActiveRecord::Migration[6.1]
  def change
    change_column :likes, :comment_id, :bigint, null: true
    change_column :likes, :post_id, :bigint, null: true
  end
end
