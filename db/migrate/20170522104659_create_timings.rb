class CreateTimings < ActiveRecord::Migration[5.0]
  def change
    create_table :timings do |t|

      t.string :day
      t.boolean :available, default: false

      t.float :fee
      
      t.time :from
      t.time :till

      t.references :clinic, foreign_key: true

      t.timestamps
    end
  end
end
