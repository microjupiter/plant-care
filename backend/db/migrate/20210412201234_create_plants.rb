class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.text :notes
      t.integer :species_id

      t.timestamps
    end
  end
end
