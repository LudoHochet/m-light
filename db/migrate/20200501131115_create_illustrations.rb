class CreateIllustrations < ActiveRecord::Migration[6.0]
  def change
    create_table :illustrations do |t|
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
