class Project < ApplicationRecord
  CATEGORY = ["Mode", "TV", "Events", "Live"]
  validates :category, presence: true, inclusion: {in: CATEGORY}
  validates :name, presence: true
  has_many_attached :photos
  has_many :illustrations, dependent: :destroy
end
