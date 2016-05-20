class Guess < ActiveRecord::Base

  validates :game_id, :round_num, :site_id, :lat_true, :long_true, presence: true

  belongs_to :game, :inverse_of => :guesses

  belongs_to :unesco_site,
    class_name: :UnescoSite,
    foreign_key: :site_id,
    primary_key: :id_no

  def self.return_5_guesses(site_ids)
    guesses = []
    5.times {|i| guesses.push(
      Guess.new(
        site_id: site_ids[i][0],
        lat_true: site_ids[i][1],
        long_true: site_ids[i][2]
      )
    )}
    return guesses
  end

  def update_points!(lat_guess, long_guess)
    distance = self.calculate_distance([lat_guess.to_f, long_guess.to_f],[self.lat_true, self.long_true])
    points = 4000*(2.71828**(distance*(-0.0002)))
    self.points = [points,2].max
    self.save!
  end

  def calculate_distance(loc1, loc2)
    rad_per_deg = Math::PI/180
    rkm = 6371
    rm = rkm * 1000

    dlat_rad = (loc2[0]-loc1[0]) * rad_per_deg
    dlon_rad = (loc2[1]-loc1[1]) * rad_per_deg

    lat1_rad, lon1_rad = loc1.map {|i| i * rad_per_deg }
    lat2_rad, lon2_rad = loc2.map {|i| i * rad_per_deg }

    a = Math.sin(dlat_rad/2)**2 + Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin(dlon_rad/2)**2
    c = 2 * Math::atan2(Math::sqrt(a), Math::sqrt(1-a))

    return 0.001 * rm * c
  end



end
