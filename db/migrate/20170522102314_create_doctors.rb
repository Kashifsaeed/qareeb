class CreateDoctors < ActiveRecord::Migration[5.0]
  def change
    create_table :doctors do |t|
      t.string :phone
      t.integer :type
      t.integer :gender
      t.string :name
      t.string :speciality
      t.string :pmdc_id

      t.timestamps
    end
  end
end
