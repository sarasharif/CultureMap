class RemoveNull < ActiveRecord::Migration
  def change
    change_column_null(:unesco_sites, :state, false)
    change_column_null(:unesco_sites, :region, false)
  end
end
