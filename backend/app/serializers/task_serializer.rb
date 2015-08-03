class TaskSerializer < ActiveModel::Serializer
  embed :ids

  attributes :id,
      :name,
      :category_id

end
