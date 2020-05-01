class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :category
      t.string :name
      t.string :date
      t.string :location
      t.string :description

      t.timestamps
    end
  end
end
