class ChangeColumnInLikes < ActiveRecord::Migration[6.1]
  def change
    change_column :likes, :post_id, :bigint, null: false
  end
end
