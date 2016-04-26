class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      # I don't want to take you anywhere new, You were fine where you were
      # send back json don't change anything besides user buttons
    else
      @errors = ["Error. Sign in failed. Please try again"]
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      # go to splash page
    else
      @errors = ["Oops. That's silly. You're silly."]
      # render shared error page
    end
  end

  def show
    if current_user
      @user = current_user
      # render things
    else
      @errors = ["no clue what's going on here"]
      # RENDER MORE ERRORS
    end
  end
  
end
