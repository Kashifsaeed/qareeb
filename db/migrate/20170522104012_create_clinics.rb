class CreateClinics < ActiveRecord::Migration[5.0]
  def change
    create_table :clinics do |t|
      t.string :name
      t.string :address

      t.float :lat
      t.float :lng

      t.references :doctor, foreign_key: true
      t.timestamps
    end
  end
end
