class Contact < ApplicationRecord
  validates :email, presence: true, format: {with:/\S+@\S+\.\S+/, message: "is uncorrect"}
  validates :message, presence: true
end

