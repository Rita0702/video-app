class CreateTalks < ActiveRecord::Migration[5.0]
  def change
    create_table :talks do |t|
      t.integer :video_id
      t.integer :user_id
      t.text    :comment, null: false
      t.timestamps
    end
  end
end
