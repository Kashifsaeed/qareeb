class Clinic < ApplicationRecord

  belongs_to :doctor
  has_many :timings
  accepts_nested_attributes_for :timings

end
