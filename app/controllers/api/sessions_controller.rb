class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      @errors = ["Incorrect password/username"]
      render "api/shared/error", status: 401
    end
  end

  def show
    # @user = current_user
    if current_user
    # if @user
      @user = current_user
      render "api/users/show"
    else
      @errors = ["You're not logged in"]
      render "api/shared/error"
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

  private
  def session_params
    params.require(:user).permit(:username, :password)
  end


end
