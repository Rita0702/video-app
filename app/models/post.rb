class Post < ApplicationRecord
  belongs_to :user
  has_many :loves, dependent: :destroy

  validates :title, presence: true

  mount_uploader :image, ImageUploader
  mount_uploader :video, VideoUploader
end
