# lib/tasks/import_realtors.rake
require 'csv'

namespace :import do
  desc "Import realtors from a CSV file and remove duplicates"
  task realtors: :environment do
    file_path = '/Users/lilianablanco/Downloads/realtors.csv'

    CSV.foreach(file_path, headers: true, header_converters: :symbol) do |row|
      realtor_attrs = row.to_h.slice(:first_name, :last_name, :brokerage, :zipcode, :image_url)
      
      # Skip the record if it's a duplicate
      next if Realtor.exists?(realtor_attrs)

      Realtor.create!(realtor_attrs)
    end
  end
end

