class Realtor < ApplicationRecord
  validates :first_name, :last_name, :brokerage, :zipcode, presence: true
end
