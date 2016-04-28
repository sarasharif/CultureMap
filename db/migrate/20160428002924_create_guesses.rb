class CreateGuesses < ActiveRecord::Migration
  def change
    create_table :guesses do |t|
      t.integer :game_id, null: false
      t.integer :round_num, null: false
      t.integer :site_id, null: false

      t.float :lat_guess
      t.float :long_guess

      t.integer :points

      t.timestamps null: false
    end
  end
end
