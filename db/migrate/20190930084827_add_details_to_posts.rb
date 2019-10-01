class AddDetailsToPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :text, :text
    add_column :posts, :image, :string
  end
end
