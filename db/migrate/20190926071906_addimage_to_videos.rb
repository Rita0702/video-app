class AddimageToVideos < ActiveRecord::Migration[5.0]
  def change
    add_column :videos, :image, :binary
  end
end
