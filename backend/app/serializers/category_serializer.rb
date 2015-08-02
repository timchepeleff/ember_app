class CategorySerializer < ActiveModel::Serializer
  embed :ids

  attributes :id

  has_many :tasks
end
