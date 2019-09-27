class RemoveToVideoFromVideos < ActiveRecord::Migration[5.0]
  def change
    remove_column :videos, :video, :text
  end
end
