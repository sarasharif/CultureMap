class Game < ActiveRecord::Base

  validates :player_id, presence: true

  belongs_to :player,
    class_name: :User,
    foreign_key: :player_id,
    primary_key: :id

  has_many :guesses

  attr_reader :site_id_nos

  def score=()
    guesses = self.guesses
    score = 0
    i = 0
      while i < guesses.length
        score += guesses[i].points
        i += 1
      end
    return score
  end

  def self.receive_5_site_ids
    UnescoSite.return_5_site_ids
  end

  def create_5_rounds
    site_ids = Game.receive_5_site_ids
    Guess.return_5_guesses(site_ids)
  end

end
