class Api::GuessesController < ApplicationController
  def create

  end

  def update
    @guess = Guess.find(params[:id])
    
    points = @guess.calculate_points(params[:lat_guess], params[:long_guess])
    @guess.update ({lat_guess: params[:lat_guess], long_guess: params[:long_guess], points: points})
    @guess.save

    @game = @guess.game
    score = @game.update_score
    @game.score = score

    @guesses = @game.guesses
    @package = [@game, @guesses]

    render json: @package
  end
end
