class Doctor < ApplicationRecord

  has_many :clinics, :inverse_of => :doctor
  accepts_nested_attributes_for :clinics, allow_destroy: true

  enum gender: [ :male, :female ]
  enum subtype: [ :medical, :dental ]

end
