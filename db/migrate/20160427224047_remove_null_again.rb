class RemoveNullAgain < ActiveRecord::Migration
  def change
    change_column_null(:unesco_sites, :state, true)
    change_column_null(:unesco_sites, :region, true)
  end
end
