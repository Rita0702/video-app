class RemovevideoFromvideos < ActiveRecord::Migration[5.0]
  def change
    remove_column :videos, :video, :MEDIUMBLOB
  end
end
