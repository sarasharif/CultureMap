class Game < ActiveRecord::Base

  validates :player_id, presence: true

  belongs_to :player,
    class_name: :User,
    foreign_key: :player_id,
    primary_key: :id

  has_many :guesses

  # OMG I have completely forgotten how to ruby.
  # I should probably use inject in here
  # UGHHHHHHHHHHHH
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


end
