class User < ActiveRecord::Base

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 8}, allow_nil: true

  attr_reader :password

  has_many :games
  has_many :guesses,
    through: :games,
    source: :guesses

  after_initialize :ensure_session_token
  # before_validation :ensure_session_token_uniqueness

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64
    # ensure_session_token_uniqueness
    self.save!
    self.session_token
  end

  # def stats_array=()
  #   best_round = self.guesses.map{ |guess| guess.score }.sort.last
  #   best_game = self.games.map{ |game| game.score }.sort.last
  #   avg_game = self.games.map{ |game| game.score}.inject{|sum, score| sum + score}/(self.games.count)
  #   return [best_round, best_game, avg_game]
  # end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  # def ensure_session_token_uniqueness
  #   while User.find_by(session_token: self.session_token)
  #     self.session_token = SecureRandom.urlsafe_base64
  #   end
  # end

end
