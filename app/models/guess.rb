class Guess < ActiveRecord::Base

  validates :game_id, :round_num, :site_id, :lat_true, :long_true, presence: true

  belongs_to :game
  belongs_to :unesco_site

  def self.return_5_guesses(site_ids)
    guesses = []
    5.times {|i| guesses.push(
      Guess.new(
        site_id: site_ids[i][0],
        lat_true: site_ids[i][1],
        long_true: site_ids[i][2]
      )
    )}
    guesses
  end



end
