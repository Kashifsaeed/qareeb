class Doctor < ApplicationRecord

  has_many :clinics, :inverse_of => :doctor, dependent: :destroy
  accepts_nested_attributes_for :clinics, allow_destroy: true

end
