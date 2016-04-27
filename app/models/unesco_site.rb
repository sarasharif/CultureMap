class UnescoSite < ActiveRecord::Base

  validates :id_no, :title_en, :title_fr, :body_en, :body_fr, :lat, :long, presence: true


end
