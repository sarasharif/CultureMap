class UnescoSite < ActiveRecord::Base

  validates :id_no, :title_en, :title_fr, :body_en, :body_fr, :lat, :long, presence: true

  def self.return_5_site_ids
    self.order("RANDOM()").first(5).map {|site| [site.id_no, site.lat, site.long] }
  end

end
