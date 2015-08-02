class TaskSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id, :name

  belongs_to :category
end
