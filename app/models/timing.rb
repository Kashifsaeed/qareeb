class Timing < ApplicationRecord
  belongs_to :clinic
  
  validates_presence_of :day, :fee
end
