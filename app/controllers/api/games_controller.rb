class Api::GamesController < ApplicationController

  def create
    @game = Game.create!({player_id: (params[:playerId].to_i), score: 0})
    @guesses = @game.create_5_rounds
      @guesses.each_with_index do |guess, i|
        guess.game_id = @game.id
        guess.round_num = i + 1
        guess.lat_guess = 0
        guess.long_guess = 0
        guess.points = 0
        guess.save!
      end
    @package = [@game, @guesses]
    render json: @package
  end

  #every game that the current user has played
  #and the best games too
  def index
    player_id = params[:playerId].to_i
    @games = Game.where('player_id=?', player_id)
    @stats = Game.stats(@games)
    @best_games = Game.leaderboard_sort(Game.where('player_id>=?', 2))
    render :index
  end

  def show
    @game = Game.find(params[:id])
    @guesses = @game.guesses
    render :show
  end


  # No ability to delete games
  #
  # private
  #
  # def game_params
  #   params.require(:game).permit(:player_id)
  # end
end
