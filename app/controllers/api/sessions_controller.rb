class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      @errors = ["Error. Sign in failed. Please try again"]
      render "api/shared/error", status: 401
    end
  end

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      @errors = ["no clue what's going on here"]
      render "api/shared/error", status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      @errors = ["Oops. That's silly. You're silly. So Silly."]
      render "api/shared/error", status: 404
    end
  end


end
