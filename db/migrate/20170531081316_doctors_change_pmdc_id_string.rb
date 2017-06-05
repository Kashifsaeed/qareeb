class DoctorsChangePmdcIdString < ActiveRecord::Migration[5.0]
  def change
  	change_column(:doctors, :pmdc_id, :string)
  end
end
