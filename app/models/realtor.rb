class Realtor < ApplicationRecord
  validates :first_name, :last_name, :brokerage, :zipcode, presence: true

  scope :search_by_name, -> (query) { where("first_name LIKE ?", "%#{query}%") }
  scope :sorted_by, -> (order) { order("first_name #{order}") }
end
