class Clinic < ApplicationRecord
  belongs_to :doctor
  has_many :timings, :inverse_of => :clinic, dependent: :destroy
  accepts_nested_attributes_for :timings, allow_destroy: true

  validates_presence_of :name, :address
end
