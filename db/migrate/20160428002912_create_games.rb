class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :player_id, null: false
      t.string :category
      t.integer :score

      t.timestamps null: false
    end

    add_index :games, :player_id
  end
end
