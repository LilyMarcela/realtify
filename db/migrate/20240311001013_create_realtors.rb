class CreateRealtors < ActiveRecord::Migration[7.1]
  def change
    create_table :realtors do |t|
      t.string :first_name
      t.string :last_name
      t.string :brokerage
      t.string :zipcode
      t.string :image_url

      t.timestamps
    end
  end
end
