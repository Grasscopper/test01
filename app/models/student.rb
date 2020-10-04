class Student < ApplicationRecord
  validates :name, presence: true
  validates :talent, presence: true
end
