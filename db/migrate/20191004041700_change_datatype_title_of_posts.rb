class ChangeDatatypeTitleOfPosts < ActiveRecord::Migration[5.0]
  def change
    change_column_null :posts, :title, true
  end
end
