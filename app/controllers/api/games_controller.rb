class Api::GamesController < ApplicationController

  def create
    @game = Game.create!({player_id: (params[:playerId].to_i)})
    @guesses = @game.create_5_rounds
      @guesses.each_with_index do |guess, i|
        guess.game_id = @game.id
        guess.round_num = i + 1
        guess.save!
      end
    @package = [@game, @guesses]
    render json: @package
  end

  # update games exists only to set score to database
  def update
    @game = Game.find(params[:id])

    if @game.update(game_params)
      render json: @game
    else
      render json: @game.errors.full_message, status: 422
    end
  end

  #every game that any individual user has played
  def index
    @games = Games.includes(:userId)
    render 'index'
  end

  # No ability to delete games
  #
  # private
  #
  # def game_params
  #   params.require(:game).permit(:player_id)
  # end
end
