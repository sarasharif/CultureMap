class CreateUnescoSites < ActiveRecord::Migration
  def change
    create_table :unesco_sites do |t|
      t.integer :id_no, null: false

      t.string :title_en, null: false
      t.string :title_fr, null: false
      t.text :body_en, null: false
      t.text :body_fr, null: false

      t.float :lat, null: false
      t.float :long, null: false

      t.string :state, null: false
      t.string :region, null: false

      t.timestamps null: false
    end

    add_index :unesco_sites, :state
    add_index :unesco_sites, :region
  end
end
