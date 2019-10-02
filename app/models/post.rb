class Post < ApplicationRecord
  belongs_to :user
  has_many :loves, dependent: :destroy

  mount_uploader :image, ImageUploader
end
