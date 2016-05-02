class Api::GuessesController < ApplicationController

  def update

    @guess = Guess.find(params[:id])

    @guess.update({lat_guess: params[:lat_guess], long_guess: params[:long_guess]})
    @guess.update_points!(params[:lat_guess], params[:long_guess])

    @game = @guess.game
    @game.update_score!

    @guesses = @game.guesses
    @package = [@game, @guesses]

    render json: @package
  end
end
