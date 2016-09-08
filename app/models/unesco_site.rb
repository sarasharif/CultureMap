class UnescoSite < ActiveRecord::Base

  validates :id_no, :title_en, :title_fr, :body_en, :body_fr, :lat, :long, presence: true
  has_many :guesses

  def self.return_5_site_ids
    self.order("RANDOM()").first(5).map do |site|
      {
        site_id: site.id_no,
        lat_true: site.lat,
        long_true: site.long
      }
    end
  end

end
