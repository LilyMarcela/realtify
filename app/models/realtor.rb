class Realtor < ApplicationRecord
  validates :first_name, :last_name, :brokerage, :zipcode, presence: true

   scope :sorted_by_first_name, ->(order) { order(first_name: order) }
end
