class RemoveVideoFromPosts < ActiveRecord::Migration[5.0]
  def change
    remove_column :posts, :video, :text
  end
end
