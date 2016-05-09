class Game < ActiveRecord::Base

  validates :player_id, presence: true

  belongs_to :player,
    class_name: :User,
    foreign_key: :player_id,
    primary_key: :id

  has_many :guesses, :inverse_of => :game

  attr_reader :site_id_nos


  def self.receive_5_site_ids
    UnescoSite.return_5_site_ids
  end

  def create_5_rounds
    site_ids = Game.receive_5_site_ids
    Guess.return_5_guesses(site_ids)
  end

  def update_score!
    self.score = self.guesses.map{|guess| guess.points}.inject{|score, points| score + points}
    self.save!
  end

  def self.stats(games)
    return [0,0] if games.length == 0

    scores = games.map{|game| game.score}
    best = scores.max
    sum = scores.inject{|sum, score| sum + score}
    avg = sum / scores.length
    stats = [best, avg]
  end

  def self.leaderboard_sort(games)
    games.sort_by{ |game| game.score}.map{|game| [game.player.username, game.score]}
  end

end
