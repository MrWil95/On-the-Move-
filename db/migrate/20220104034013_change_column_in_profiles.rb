class ChangeColumnInProfiles < ActiveRecord::Migration[6.1]
  def change
    rename_column :profiles, :image, :avatar
  end
end
