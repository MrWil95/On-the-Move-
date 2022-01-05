class RemoveCountFromLikes < ActiveRecord::Migration[6.1]
  def change
    remove_column :likes, :count, :integer
  end
end
