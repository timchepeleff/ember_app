class Task < ActiveRecord::Base
  belongs_to :category

  validates :name, presence: true, uniqueness: { scope: :category_id }
end
