class Api::UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      # render "app"
    else
      flash.now[:errors] = @user.errors.flash.now
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end

end
