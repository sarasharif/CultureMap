class Guess < ActiveRecord::Base

  validates :game_id, :round_num, :site_id, presence: true

  belongs_to :game
  belongs_to :unesco_site

end
