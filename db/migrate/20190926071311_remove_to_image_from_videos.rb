class RemoveToImageFromVideos < ActiveRecord::Migration[5.0]
  def change
    remove_column :videos, :Image, :text
  end
end
