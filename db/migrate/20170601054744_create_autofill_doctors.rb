class CreateAutofillDoctors < ActiveRecord::Migration[5.0]
  def change
    create_table :autofill_doctors do |t|
      t.string :name
      t.string :pmdc_id

      t.timestamps
    end
  end
end
