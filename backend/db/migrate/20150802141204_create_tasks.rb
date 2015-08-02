class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.text :name, null: false
      t.integer :category_id, null: false

      t.timestamps null: false
    end

  end
end
