class Doctor < ApplicationRecord

  has_many :clinics
  accepts_nested_attributes_for :clinics

  enum gender: [ :male, :female ]
  enum type: [ :medical, :dental ]

end
