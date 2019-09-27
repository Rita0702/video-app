class ChangeColumnToVideos < ActiveRecord::Migration[5.0]
  def change
    change_column :videos, :image, :binary, :limit => 1.megabyte
  end
end
