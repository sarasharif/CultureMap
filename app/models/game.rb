class Game < ActiveRecord::Base

  validates :player_id, presence: true

  belongs_to :player,
    class_name: :User,
    foreign_key: :player_id,
    primary_key: :id

  has_many :guesses, :inverse_of => :game

  attr_reader :site_id_nos

  def create_5_rounds
    site_ids = UnescoSite.five_random_sites
    Guess.return_5_guesses(site_ids)
  end

  def update_score!
    self.score = self.guesses.map{ |guess| guess.points }.inject{ |score, points| score + points }
    self.save!
  end

  def self.stats(games)
    return {best: 0, avg: 0} if games.length == 0
    scores = games.map{ |game| game.score}
    sum = scores.inject{ |sum, score| sum + score }
    { best: scores.max, avg: sum / scores.length }
  end

  def self.leaderboard_sort(games)
    games.sort_by{ |game| game.score }.map{ |game| { name: game.player.username, score: game.score} }
  end

end
