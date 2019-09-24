class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :video,   null: false
      t.text :image,   null: false
      t.timestamps
    end
  end
end
