class Project < ApplicationRecord
  CATEGORY = ["Fashion", "TV", "Events", "Live"]
  validates :category, presence: true, inclusion: {in: CATEGORY}
  validates :name, presence: true
  has_many_attached :photos
  has_many :illustrations, dependent: :destroy

  include PgSearch::Model
  pg_search_scope :search_global,
    against: [ :name, :category, :location, :date, :description ],
    using: {
      tsearch: { prefix: true } # <-- now `superman batm` will return something!
    }
end
