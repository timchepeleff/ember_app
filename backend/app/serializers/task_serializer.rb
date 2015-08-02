class TaskSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id

  belongs_to :category
end
