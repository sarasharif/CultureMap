class AddColumnsToGuesses < ActiveRecord::Migration
  def change
    add_column :guesses, :lat_true, :float, null: false
    add_column :guesses, :long_true, :float, null: false
  end
end
