class Doctor < ApplicationRecord
  has_many :clinics, :inverse_of => :doctor, dependent: :destroy
  accepts_nested_attributes_for :clinics, allow_destroy: true

  validates_presence_of :name, :phone, :speciality, :pmdc_id
end
