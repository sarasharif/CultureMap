class Game < ActiveRecord::Base

  validates :player_id, presence: true

  belongs_to :player,
    class_name: :User,
    foreign_key: :player_id,
    primary_key: :id

  has_many :guesses


end
