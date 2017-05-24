class Clinic < ApplicationRecord

  belongs_to :doctor
  has_many :timings, :inverse_of => :clinic
  accepts_nested_attributes_for :timings, allow_destroy: true

end
